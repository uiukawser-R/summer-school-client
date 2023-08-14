import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const EnrollrdClass = () => {
const [enrolledClass,setEnrolledClass]=useState();
const{user}=useAuth();



useEffect(() => {
    fetch(`http://localhost:5000/payment?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
            setEnrolledClass(data);
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
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {enrolledClass?.map((classItem, index) => (
                        <tr key={classItem._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>         
                                 <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                
                            </div>
                            </td>
                            <td>{classItem.name}</td>
                            <td>{user.email}</td>
                            <td><h2 className=" text-green-600 uppercase">{classItem.status}</h2></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default EnrollrdClass;