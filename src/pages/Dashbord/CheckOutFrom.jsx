import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutFrom = ({item, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing,setProcessing]=useState(false);
    const [transactionId,setTransctionId]=useState('');


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price,axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }
        setProcessing(true)

        const { paymentIntent, error:confrimError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if(confrimError){
            console.log(confrimError);
        }
        console.log('paymentIntent',paymentIntent);
        setProcessing(false)
        if(paymentIntent.status=== 'succeeded'){
            setTransctionId(paymentIntent.id)
            const paymentInfo={
                email: user.email,
                transactionId:paymentIntent.id,
                date:new Date(),
                itemId: item._id,
                classId:item.classId,
                seats:item.available_seats,
                image:item.image,
                status:'enrolled',
                price,
                name:item.name
            }
            axiosSecure.post('/payment',paymentInfo)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertResult.insertedId){
                    // display comfirm
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Payment successfull',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

    }


    return (
        <>
            <form className="w-2/3 m-8 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500 ml-8">Transactrion complite with transactionId : {transactionId}</p>}
        </>

    );
};

export default CheckOutFrom;