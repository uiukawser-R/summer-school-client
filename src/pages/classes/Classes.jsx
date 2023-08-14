import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ClassCard from "./ClassCard";

const Classes = () => {


    const [classes, setClasses] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then((res) => res.json())
            .then((data) => {
                const newData = data.filter((classItem) => classItem.status === "Approve");
                setClasses(newData);
            });
    }, []);




    console.log(name);









    return (
        <div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <section>
                <SectionTitle subHeading="choice from here" heading="Class card"></SectionTitle>
            </section>

            <div className="flex justify-center mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
                    {
                        classes.map(classItem => (
                            <ClassCard
                                key={classItem._id}
                                classItem={classItem}
                            ></ClassCard>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Classes;