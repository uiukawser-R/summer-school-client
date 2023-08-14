import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import img from '../../../../assets/Rectangle 3.png'
import './joinUs.css'
import { Link } from "react-router-dom";

const JoinUs = () => {
    return (
        <div>
            <SectionTitle subHeading="now" heading="join us"></SectionTitle>
            <div className="join-us-bg bg-fixed mb-5">

                <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-30">
                    <div className="md:w-2/3 md:pl-20 pl-5">
                        <h1 className="text-2xl text-orange-600">Language School</h1>
                        <h4 className="mb-10 text-white">Work with us. Learn with us. Improve with us.</h4>
                        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, saepe iusto architecto quo repudiandae nulla! Autem illum facere magni sequi. Deleniti sint similique, nesciunt illo corrupti molestiae doloremque veritatis distinctio eligendi, ipsam voluptas, eius voluptates unde non eveniet pariatur quisquam.</p>
                        <Link to='/classes'><button className="btn btn-outline btn-warning mt-2">Join now</button></Link>
                    </div>
                    <div className=""><img src={img} alt="" /></div>
                </div>
            </div>
        </div>

    );
};

export default JoinUs;