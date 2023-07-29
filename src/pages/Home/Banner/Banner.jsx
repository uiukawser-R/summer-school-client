import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/banner1.png'
import img2 from '../../../assets/banner2.png'
import img3 from '../../../assets/banner3.png'

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2}/>
        </div>
        <div>
            <img src={img3} />
        </div>
    </Carousel>
    );
};

export default Banner;