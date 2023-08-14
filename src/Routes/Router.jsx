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
import PaymentHistory from "../pages/Dashbord/PaymentHistory";
import Wellcome from "../pages/Dashbord/Wellcome";
import AdminRoute from "./adminRout/AdminRoute";
import InstructorRoute from "./InstructorRoute/InstructorRoute";


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
                path:'payment/:id',
                element:<Payment></Payment>,
                loader: ({params})=>fetch(`http://localhost:5000/carts/${params.id}`)
            },
            {
                path:'allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'addclass',
                element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path:'instructorcourses',
                element:<InstructorRoute><InstructorsCourse></InstructorsCourse></InstructorRoute>
            },
            {
                path:'manageclass',
                element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path:'payment-history',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'wellcome',
                element:<Wellcome></Wellcome>
            }
        ]
    }
]);