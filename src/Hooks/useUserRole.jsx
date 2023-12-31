import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useUserRole = () => {
  const { user, loading } = useAuth();

  // use react query to check if user is admin
  const { data: userRole, isLoading: userRoleLoading } = useQuery({
    queryKey: ['userRole', user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await fetch(`https://summer-camp-school-server-uiukawser-r.vercel.app/users${user?.email}`);
        return res.json();
      } catch (error) {
        // Handle error if necessary
        console.error(error);
        return false; // Return false in case of an error
      }
    }
  });



  return [userRole, userRoleLoading];
};

export default useUserRole;
