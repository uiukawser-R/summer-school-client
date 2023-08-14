import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
const data=useLoaderData();
const {price}=data;
const total=parseFloat(price.toFixed(2))
console.log(data);

    return (
        <div className="w-full">
            <section>
                <SectionTitle subHeading="please process" heading="payment"></SectionTitle>
            </section>
            <Elements stripe={stripePromise}>
                <CheckOutFrom item={data} price={total} ></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;