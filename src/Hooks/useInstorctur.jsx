// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";




// const useInstorctur = () => {
//     const {user, loading} = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     // use axios secure with react query
//     const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
//         queryKey: ['isInstructor', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//             return res.data.instructor;
//         }
//     });
//     return [isInstructor, isInstructorLoading]
// }
// export default useInstorctur;

  

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstorctur = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(['isInstructor', user?.email], {
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return res.data.instructor;
            } catch (error) {
                // Handle error if necessary
                console.error(error);
                return false; // Return false in case of an error
            }
        }
    });

    return [isInstructor, isInstructorLoading];
};

export default useInstorctur;

