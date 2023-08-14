import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";



const InstructorsCourse = () => {

    const { user } = useAuth();
    console.log(user);

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then((res) => res.json())
            .then((data) => {
                const newData = data.filter((classItem) => classItem.instructor_email === user?.email);
                setClasses(newData);
            });
    }, []);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Total Enrolled student</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
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
                                <td>Todo</td>
                                <td>{classItem.status}</td>
                                <td>
                                    <button className="btn btn-accent btn-sm">Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorsCourse;











// import useCart from "../../../Hooks/useCart";

// const InstructorsCourse = () => {
//     // const [instructorclass] = useCart();


//     const [instructorclass] = useCart();
//     console.log(instructorclass);

//     return (
//         <div>
//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Image</th>
//                             <th>Name</th>
//                             <th>Total Enrolled student</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                             <th>Feedback</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {instructorclass.map((classItem, index) => (
//                             <tr key={classItem._id}>
//                                 <td>
//                                     {index + 1}
//                                 </td>
//                                 <td>         
//                                      <div className="flex items-center space-x-3">
//                                         <div className="avatar">
//                                             <div className="mask mask-squircle w-12 h-12">
//                                                 <img src={classItem.image} alt="Avatar Tailwind CSS Component" />
//                                             </div>
//                                         </div>
                                    
//                                 </div>
//                                 </td>
//                                 <td>{classItem.name}</td>
//                                 <td>Todo</td>
//                                 <td>{classItem.status}</td>
//                                 <td>
//                                     <button className="btn btn-accent">Update</button>
//                                 </td>
//                                 <td>
//                                     nothing
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default InstructorsCourse;

