import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ClassItem from "../classItem/ClassItem";
import './populerclass.css'

const PopulerClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("https://summer-camp-school-server-uiukawser-r.vercel.app/class")
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
            });
    }, []);

    // Sort
    const sortedClasses = classes.sort(
        (a, b) => b.number_of_students - a.number_of_students
    );


    const topSixClasses = sortedClasses.slice(0, 6);
    return (
        <section>
            <section>
                <SectionTitle
                    subHeading={'top six'}
                    heading={'populer classes'}
                ></SectionTitle>
            </section>

            <div className="bg-gradient-to-r from-gray-600 via-yellow-100 to-gray-400 bg-opacity-80 flex justify-center mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 p-4">
                    
                    {topSixClasses.map((c) => (
                        <div className="hover:scale-105 transition-transform hover:rotate-45" key={c._id}>
                            <ClassItem c={c} />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PopulerClasses;