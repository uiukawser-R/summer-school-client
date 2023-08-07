import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import SelectedClasses from "../pages/Dashbord/SelectedClasses";
import Dashbord from "../Layout/Dashbord";
import EnrollrdClass from "../pages/Dashbord/EnrollrdClass";
import Payment from "../pages/Dashbord/Payment";
import AllUsers from "../pages/Dashbord/AllUsers/AllUsers";
import AddClass from "../pages/Dashbord/Add a class/AddClass";
import InstructorsCourse from "../pages/Dashbord/Instructors Course/InstructorsCourse";
import ManageClass from "../pages/Dashbord/ManageClass/ManageClass";
import Classes from "../pages/classes/Classes";
import Instructor from "../pages/Instructor/Instructor";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'classes',
                element:<Classes></Classes>
            },
            {
                path:'instructor',
                element:<Instructor></Instructor>
            }


        ]
    },
    {
        path: 'dashbord',
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: 'selectedclass',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path:'enrolled',
                element:<EnrollrdClass></EnrollrdClass>,
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'instructorcourses',
                element:<InstructorsCourse></InstructorsCourse>
            },
            {
                path:'manageclass',
                element:<ManageClass></ManageClass>
            }
        ]
    }
]);