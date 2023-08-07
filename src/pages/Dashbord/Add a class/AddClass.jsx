import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token=import.meta.env.VITE_Image_Upload_token;
const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

const AddClass = () => {
    const { user } = useAuth();
    // console.log(user);
    const [axiosSecure]=useAxiosSecure();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData=new FormData();
        formData.append('image',data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imgRes=>{
            if(imgRes.success){
                const imgurl=imgRes.data.display_url;
                const {name, price, instructor_email, available_seats,instructor_name,status,number_of_students} = data;
                const newItem = {name, price: parseFloat(price), instructor_email, available_seats:parseFloat(available_seats), number_of_students:parseFloat(number_of_students) ,instructor_name,status ,image:imgurl}
                console.log(newItem)
                // console.log(data,imgurl);
                axiosSecure.post('/classes',newItem)
                .then(data=>{
                    console.log('after posting new class',data.data);
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class add successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                }) 
            }
        })
    }
    console.log(errors);

    return (
        <div className="w-full">
            <SectionTitle subHeading="What's New" heading="Add a class"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-10">
                <div className="md:flex gap-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">class name?</span>
                        </label>
                        <input type="text" placeholder="Class name" {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full max-w-xs" />

                    </div>
                   

                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor name</span>
                    </label>
                    <input type="text" placeholder="Instructor name" defaultValue={user?.displayName} {...register("instructor_name", {required: true, maxLength: 80})} className="input input-bordered w-full max-w-xs" />

                </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor email</span>
                        </label>
                        <input type="email" placeholder="Instructor emaul" {...register("instructor_email", {required: true, maxLength: 80})} defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />

                    </div>
                </div>
                <div className="md:flex gap-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" placeholder="status" {...register("status", {required: true, maxLength: 80})} defaultValue="pending" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available seats?</span>
                        </label>
                        <input type="number" placeholder="available seats" {...register("available_seats", {required: true, maxLength: 80})} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price?</span>
                        </label>
                        <input type="number" placeholder="price" {...register("price", {required: true, maxLength: 80})} className="input input-bordered w-full max-w-xs" />

                    </div>
                </div>
                <div className="md:flex gap-2">
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class image</span>
                        </label>
                        <input type="file" {...register("image", {required: true, maxLength: 80})} className="file-input file-input-bordered w-full max-w-xs" />
                        <label className="label">
                        
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Number of students</span>
                        </label>
                        <input type="number" placeholder="number_of_students" {...register("number_of_students", {required: true, maxLength: 80})} className="input input-bordered w-full max-w-xs" />

                    </div>
                </div>
                    <input className="btn btn-neutral btn-sm mb-5" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;










// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
//       <select {...register("Title", { required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select>

//       <input {...register("Developer", { required: true })} type="radio" value="Yes" />
//       <input {...register("Developer", { required: true })} type="radio" value="No" />

//       <input type="submit" />
//     </form>
//   );
// }