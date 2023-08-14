import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo2.png"


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }




    const navOptions = <>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/classes">Classes</Link> </li>
        <li><Link to="instructor">Instructor</Link> </li>
        

        {
            user ? <>

                
                     <li> <Link to='/dashbord/wellcome'>Dashboard</Link></li>
                     <button onClick={handleLogOut} >LogOut</button>
                







            </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl  flex items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/'><a className="btn btn-ghost normal-case text-xl mb-2"><img src={logo} /><span className="text-orange-600">Language Learning</span> </a></Link>
            </div>
            <div className="navbar-center hidden lg:flex justify-center">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>



            {user && <img style={{ height: '50px', width: '50px' }} className='text-center rounded-full mx-10' src={user?.photoURL} alt="" />}



        </div>
    );
};

export default Navbar;









// {
//     isAdmin ? <>
//         <li> <Link to='/dashbord'>Dashboard</Link></li>
//         <button onClick={handleLogOut} >LogOut</button>
//     </> : isInstructor ? <>
//         <li> <Link to='/dashbord'>Dashboard</Link></li>
//         <button onClick={handleLogOut} >LogOut</button>
//     </> : <>
//         <li> <Link to='/dashbord/selectedclass'>Dashboard</Link></li>
//         <button onClick={handleLogOut} >LogOut</button>
//     </>
// }