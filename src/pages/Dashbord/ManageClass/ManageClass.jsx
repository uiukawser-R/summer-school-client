// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";

// const ManageClass = () => {



//     const { data: classes = [], refetch } = useQuery(['classes'], async () => {
//         const res = await fetch('http://localhost:5000/classes')
//         return res.json();
//     })


//     console.log(classes);



//     const handleApprove = id => {
//         const status = 'Approve'; 
    
//         fetch(`http://localhost:5000/classes/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json', 
//             },
//             body: JSON.stringify({ status }), 
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.modifiedCount > 0) {
//                 refetch();
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: ' Approved!',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             }
//         });
//     }
    


//     const handleDeny = id => {
//         const status = 'Deny'; 
    
//         fetch(`http://localhost:5000/classes/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json', 
//             },
//             body: JSON.stringify({ status }), 
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.modifiedCount > 0) {
//                 refetch();
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: ' Deny successfull!',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             }
//         });
//     }




//     return (
//         <div>
//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
                            
//                             <th>Image</th>
//                             <th>Class name</th>
//                             <th>Instructor name</th>
//                             <th>Instructor email</th>
//                             <th>Available seats</th>
//                             <th>Price</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {classes.map((classItem) => (
//                             <tr key={classItem._id}>
                               
//                                 <td>
//                                     <div className="flex items-center space-x-3">
//                                         <div className="avatar">
//                                             <div className="mask mask-squircle w-12 h-12">
//                                                 <img src={classItem.image} alt="Avatar Tailwind CSS Component" />
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </td>
//                                 <td>{classItem.name}</td>
//                                 <td>{classItem.instructor_name}</td>
//                                 <td>{classItem.instructor_email}</td>
//                                 <td>{classItem.available_seats}</td>
//                                 <td>{classItem.price}</td>
//                                 <td>{classItem?.status}</td>
//                                 <td>
//                                     <div><button onClick={() => handleApprove(classItem._id)} className="btn btn-accent btn-xs p-1 mb-1">Approve</button></div>
//                                     <div><button onClick={() => handleDeny(classItem._id)} className="btn btn-warning btn-xs mb-1">Deny </button></div>
//                                     <div><button className="btn btn-warning btn-xs">Feedback </button></div>
                                    
//                                 </td>
                                
                                
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageClass;





import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClass = () => {
    const [disabledIds, setDisabledIds] = useState([]);
    
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    });

    const handleApprove = id => {
        const status = 'Approve'; 
        const updatedDisabledIds = [...disabledIds, id];
        
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ status }), 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                refetch();
                setDisabledIds(updatedDisabledIds);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Approved!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }

    const handleDeny = id => {
        const status = 'Deny'; 
        const updatedDisabledIds = [...disabledIds, id];
        
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ status }), 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                refetch();
                setDisabledIds(updatedDisabledIds);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Deny successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem) => (
                            <tr key={classItem._id}>
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
                                <td>{classItem.instructor_name}</td>
                                <td>{classItem.instructor_email}</td>
                                <td>{classItem.available_seats}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem?.status}</td>
                                <td>
                                    <div>
                                        <button
                                            onClick={() => handleApprove(classItem._id)}
                                            className="btn btn-accent btn-xs p-1 mb-1"
                                            disabled={disabledIds.includes(classItem._id)}
                                        >
                                            Approve
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => handleDeny(classItem._id)}
                                            className="btn btn-warning btn-xs mb-1"
                                            disabled={disabledIds.includes(classItem._id)}
                                        >
                                            Deny
                                        </button>
                                    </div>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;
