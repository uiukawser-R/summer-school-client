import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ClassItem from "../classItem/ClassItem";

const PopulerClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("https://summer-camp-school-server-red.vercel.app/class")
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

            <div className="flex justify-center mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
                    {topSixClasses.map((c) => (
                        <ClassItem key={c._id} c={c} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopulerClasses;