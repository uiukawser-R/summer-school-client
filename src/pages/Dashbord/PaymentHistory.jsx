import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const PaymentHistory = () => {
    const [enrolledClass, setEnrolledClass] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://summer-camp-school-server-uiukawser-r.vercel.app/payment?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                // Sort the data by date in descending order (latest payment first)
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setEnrolledClass(sortedData);
            });
    }, [user?.email]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                            <th>Email</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledClass.map((classItem, index) => (
                            <tr key={classItem._id}>
                                <td>{index + 1}</td>
                                <td>{classItem.date}</td>
                                <td><p className="text-orange-500">{classItem.transactionId}</p></td>
                                <td>{user.email}</td>
                                <td>{classItem.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
