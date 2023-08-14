import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";
import useInstorctur from "../Hooks/useInstorctur";
import useAuth from "../Hooks/useAuth";

const Dashbord = () => {

    // const isAdmin = true;
    // const isAdmin = false;
    // const isInstructor=true;
    // const isInstructor=false;

    const [isAdmin] = useAdmin();
    const [isInstructor]=useInstorctur();
    const nevigate=useNavigate();
    // const [isAdmin] = useAdmin();
    // console.log('instructor',isInstructor);
    // console.log('admin',isAdmin);


    const { logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
            nevigate('/')
            // <Navigate to="/" state={{from: location}} replace></Navigate>
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-orange-200 text-base-content">
                  


                    {
                        isAdmin ? <>
                            <h2 className="text-2xl mb-5">Admin dashbord</h2>
                            <li><NavLink to='/dashbord/manageclass'>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashbord/allusers'>Manage Users</NavLink></li>
                        </> : isInstructor ? <>
                            {/* Instructor specific content */}
                            <h2 className="text-2xl mb-5">Instructor Dashboard</h2>
                            <li><NavLink to='/dashbord/addclass'>Add a Class</NavLink></li>
                            <li><NavLink to='/dashbord/instructorcourses'>My Courses</NavLink></li>
                        </> : <>
                            {/* Normal user content */}
                            <h2 className="text-2xl mb-5">Student Dashboard</h2>
                            <li><NavLink to='/dashbord/selectedclass'>My Selected Classes</NavLink></li>
                            <li><NavLink to='/dashbord/enrolled'>My Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashbord/payment-history'>Payment history</NavLink></li>
                        </>
                    }



                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><button onClick={handleLogOut} className="btn btn-outline btn-sm"> Logout</button></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;



// {
//     isAdmin ? <>
//         <h2 className="text-4xl mb-5">Summer School</h2>
//         <li><NavLink to='/dashbord/demo2'>Manage Classes</NavLink></li>
//         <li><NavLink to='/dashbord/allusers'>Manage Users</NavLink></li>
//     </> : isInstroctur ? <>
//         {/* Instructor specific content */}
//         <h2 className="text-4xl mb-5">Instructor Dashboard</h2>
//         <li><NavLink to='/dashbord/instructor-courses'>My Courses</NavLink></li>
//         <li><NavLink to='/dashbord/students'>My Students</NavLink></li>
//     </> : <>
//         {/* Normal user content */}
//         <li><NavLink to='/dashbord/selectedclass'>My Selected Classes</NavLink></li>
//         <li><NavLink to='/dashbord/enrolled'>My Enrolled Classes</NavLink></li>
//         <li><NavLink to='/dashbord/payment'>Payment</NavLink></li>
//     </>
// }