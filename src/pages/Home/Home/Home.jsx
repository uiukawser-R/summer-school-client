


import Banner from "../Banner/Banner";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import PopulerInstructor from "../PopulerInstructor/PopulerInstructor";
import JoinUs from "./join us/JoinUs";

const Home = () => {


  return (
    <div>
      <Banner></Banner>
      <div>
        <PopulerClasses></PopulerClasses>
      </div>
      <div>
        <PopulerInstructor></PopulerInstructor>
      </div>
      <div>
        <JoinUs></JoinUs>
      </div>

    </div>
  );
};

export default Home;

