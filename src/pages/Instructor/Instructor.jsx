import { useQuery } from "@tanstack/react-query";


const Instructor = () => {



    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-camp-school-server-red.vercel.app/classes')
        return res.json();
    })

    console.log(classes);


    return (
        
              <div>
            <div className="overflow-x-auto">
                <table className="table mt-20">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
                            <tr key={classItem._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classItem?.instructor_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{classItem.instructor_name}</td>
                                <td>{classItem.instructor_email}</td>

                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    
    );
};

export default Instructor;