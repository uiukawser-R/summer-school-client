import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div className="w-full">
            <section>
                <SectionTitle subHeading="please process" heading="payment"></SectionTitle>
            </section>
            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;