import React from 'react'
import "./_Header.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Header = () => {
    return (
        <div className='header'>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='swp-1'>
                        <div className='col-12 swp-content'>
                            <h3>Floral</h3>
                            <h1>Excellent bouquets for you</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swp-1 swp-2'>
                        <div className='col-12 swp-content'>
                            <h3>Floral</h3>
                            <h1>Excellent bouquets for you</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swp-1 swp-3'>
                        <div className='col-12 swp-content'>
                            <h3>Floral</h3>
                            <h1>Excellent bouquets for you</h1>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Header