import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../shered/social login/SocialLogin";
import img from '../../assets/login.png'

const SignUp = () => {

    const {createUser,updateUserProfile}=useContext(AuthContext);
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photo)
            .then(()=>{
                console.log('user profile updateed');
                const saveUser={name:data.name, email:data.email}
                fetch('https://summer-camp-school-server-uiukawser-r.vercel.app/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User profile created successfull',
                            showConfirmButton: false,
                            timer: 1500
                          })
                            navigate('/')
                    }
                })
              
                
            })
            .catch(error=>console.log(error))
        })
    };

    // console.log(watch("example"))

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-14">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name",{required:true})} name="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("email",{required:true})} name="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="Photo" {...register("photo",{required:true})} name="photo" className="input input-bordered" />
                            {errors.photo && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password",{
                                required:true,
                                minLength:6,
                                pattern:/(?=.*[A-Z])(?=.*[!@#$%&? "])/ 
                                })} name="password" className="input input-bordered" />
                            {errors.password?.type==='required' && <span className="text-red-600">This field is required</span>}
                            {errors.password?.type==='minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                            {errors.password?.type==='pattern' && <span className="text-red-600">Password must have a capital later and special character</span>}
                             

                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Comfrim password" {...register("confirm_password",{required:true})} name="confirm_password" className="input input-bordered" />
                            {errors.confirm_password && <span className="text-red-600">This field is required</span>}

                        </div> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                        <p>I already have an account! please <Link className="text-red-500" to="/login"> Login</Link> </p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;