import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
    const [cart,refetch] = useCart()




    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
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
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.instructor_name}</td>
                                <td>{item.available_seats}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div>
                                        <div>
                                            <Link to={`/dashbord/payment/${item._id}`}><button className="btn btn-accent btn-xs p-1 mb-2">Pay</button></Link>


                                        </div>
                                        <div>
                                        

                                            <button onClick={() => handleDelete(item)}className="btn btn-circle btn-sm bg-red-600  text-white">
                                            <FaTrashAlt></FaTrashAlt>
                                            </button>

                                        </div>
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

export default SelectedClasses;