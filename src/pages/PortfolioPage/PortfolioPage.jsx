import './PortfolioPage.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function PortfolioPage() {
    return (
        <div className="text-zone">
            <div>
                <h1>
                    <span className="word">
                        <span className="letter">M</span>
                        <span className="letter">y</span>
                        <span> </span>
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
                </h1>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper-wrapper"
                >
                    <SwiperSlide>
                        <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}