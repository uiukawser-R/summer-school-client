import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home-bg-4-1.jpg'
import img2 from '../../../assets/home-bg-6.jpg'
import img3 from '../../../assets/home-bg-7.jpg'
import img4 from '../../../assets/home-bg-1-1.jpg'
import img5 from '../../../assets/banner4.png'
import img6 from '../../../assets/banner5.png'

const Banner = () => {
    return (
        <Carousel autoPlay={true} interval={3000}>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2}/>
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
        <div>
            <img src={img6} />
        </div>
    </Carousel>
    );
};

export default Banner;