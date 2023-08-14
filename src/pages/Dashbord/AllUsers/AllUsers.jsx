// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";

// const AllUsers = () => {
//     const { data: users = [], refetch } = useQuery(['users'], async () => {
//         const res = await fetch('http://localhost:5000/users')
//         return res.json();
//     })


//     const handleMakeAdmin = id => {
//         fetch(`http://localhost:5000/users/admin/${id}`, {
//             method: 'PATCH'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     refetch()
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: ' Admin now!',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 }
//             })
//     }
//     const handleMakeInstroctur = id => {
//         fetch(`http://localhost:5000/users/instructor/${id}`, {
//             method: 'PATCH'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     refetch()
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: ' Instrocrur now!',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 }
//             })
//     }


//     return (
//         <div className="w-full">
//             <div className="text-4xl text-center uppercase">All Users: {users.length}</div>
//             <div className="overflow-x-auto">
//                 <table className="table table-zebra ">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map((user, index) => <tr key={user._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>
//                                     {user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 'user'}
//                                 </td>
//                                 <td>
//                                     <div>
//                                         <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-active btn-sm mx-1 btn-secondary">Make Admin</button>
//                                         <button onClick={() => handleMakeInstroctur(user._id)} className="btn btn-active btn-sm mx-1 btn-accent">Make instroctur</button>
//                                     </div>
//                                 </td>
//                             </tr>)
//                         }


//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default AllUsers;










import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    const handleMakeAdmin = id => {
        const role = 'admin'; 
      
        fetch(`http://localhost:5000/users/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({ role }), 
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: ' Admin now!',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
      }
      
      const handleMakeInstroctur = id => {
        const role = 'instructor'; 
      
        fetch(`http://localhost:5000/users/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({ role }), 
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: ' instructor now!',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
      }
      


    return (
        <div className="w-full">
            <div className="text-4xl text-center uppercase">All Users: {users.length}</div>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 'user'}
                                </td>
                                <td>
                                    <div>
                                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-active btn-sm mx-1 btn-secondary">Make Admin</button>
                                        <button onClick={() => handleMakeInstroctur(user._id)} className="btn btn-active btn-sm mx-1 btn-accent">Make instroctur</button>
                                    </div>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;