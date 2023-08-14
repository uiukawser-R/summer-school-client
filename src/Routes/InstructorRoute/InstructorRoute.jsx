import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useInstorctur from "../../Hooks/useInstorctur";



const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstorctur();
    const location = useLocation();

    if(loading || isInstructor){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructorLoading) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
