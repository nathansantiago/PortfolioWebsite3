import './PortfolioPage.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';

export default function PortfolioPage() {

    const descriptionList = [
        'Ram Eats is an app',
        'SafeCuisine is an app',
        'Agricultural Water Usage Calculator',
        'CDC 2023',
        'Python Weather API'
    ];

    const [photoDescription, setPhotoDescription] = useState(descriptionList[0]);

    return (
        <div className="text-zone">
            <div className="portfolio-container">
                <div className='text-container'>
                    <h1>
                        <div className="line">
                            <span className="word">
                                <span className="letter">M</span>
                                <span className="letter">y</span>
                            </span>
                            <span className="word">
                                <span className="letter">P</span>
                                <span className="letter">r</span>
                                <span className="letter">o</span>
                                <span className="letter">j</span>
                                <span className="letter">e</span>
                                <span className="letter">c</span>
                                <span className="letter">t</span>
                                <span className="letter">s</span>
                            </span>
                        </div>
                    </h1>
                    <p>
                        {photoDescription}
                    </p>
                </div>
                <div className='gallery-container'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{clickable: true}}
                        modules={[EffectCoverflow, Pagination]}
                        className="swiper-wrapper"
                        onRealIndexChange={(element) => {
                            setPhotoDescription(descriptionList[element.activeIndex]);
                        }}
                    >
                        <SwiperSlide key={0}>
                            <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                            <div className='caption'>
                                <a href="">Ram Eats</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                            <div className='caption'>
                                <a href="">Safe Cuisine</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                            <div className='caption'>
                                <a href="">Agricultural Water Usage Calculator</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                            <div className='caption'>
                                <a href="">Video Game Sales For Publishers</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                            <div className='caption'>
                                <a href="">Python Weather API</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}