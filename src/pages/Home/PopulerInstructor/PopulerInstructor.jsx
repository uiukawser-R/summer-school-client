import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import img1 from '../../../assets/Rectangle 1 (5).png'
import img2 from '../../../assets/Rectangle 1 (2).png'
import img3 from '../../../assets/Rectangle 1 (6).png'
import img4 from '../../../assets/Rectangle 1 (9).png'
import img5 from '../../../assets/Rectangle 1 (8).png'
import img6 from '../../../assets/Rectangle 1 (3).png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const PopulerInstructor = () => {
    return (
        <section className='mb-5'>
            <section>
                <SectionTitle
                    subHeading={'top six'}
                    heading={'instructor'}
                ></SectionTitle>
            </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Autoplay]}
                autoplay={{ delay: 1000 }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-s-full' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-e-full' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-s-full' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-e-full' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-s-full' src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-e-full' src={img6} alt="" />
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default PopulerInstructor;