import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClass = () => {



    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-camp-school-server-red.vercel.app/classes')
        return res.json();
    })


    console.log(classes);



    const handleApprove = id => {
        const status = 'Approve'; 
    
        fetch(`https://summer-camp-school-server-red.vercel.app/classes/${id}`, {
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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ' Approved!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }
    




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
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
                                <td>{classItem.instructor_name}</td>
                                <td>{classItem.instructor_email}</td>
                                <td>{classItem.available_seats}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem?.status}</td>
                                <td>
                                    <button onClick={() => handleApprove(classItem._id)} className="btn btn-accent btn-xs p-1 mb-2">Approve</button>
                                    
                                </td>
                                <td>
                                    <button className="btn btn-warning btn-sm">Deny & Feedback </button>
                                    
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