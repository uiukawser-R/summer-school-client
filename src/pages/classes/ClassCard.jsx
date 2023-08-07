import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";

const ClassCard = (classItem) => {
    
    const { name, image, price, available_seats,instructor_name, _id } = classItem.classItem;
    console.log(classItem);
    const {user}=useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = classItem => {
        console.log(classItem);
        if (user && user.email) {
            const cartItem = { classId: _id, name: name, available_seats: available_seats, image: image, price: price, email: user.email }

            fetch('https://summer-camp-school-server-red.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }




    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <p>Name: {name}</p>
    <p>Instructor: {instructor_name}</p>
    <p>Availableseats: {available_seats}</p>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleAddToCart(classItem)} className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
    );
};

export default ClassCard;