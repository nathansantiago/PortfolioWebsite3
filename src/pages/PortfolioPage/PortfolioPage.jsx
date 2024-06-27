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
        'RamEats is an app that will revolutionize your dining experience at Chase and Lenoir. RamEats will be a user-friendly mobile application designed to provide UNC students with daily food recommendations tailored to their fitness goals. Whether you\'re aiming to lose weight, gain muscle, or simply maintain a healthy lifestyle, RamEats will be able to provide dining hall specific nutrition recommendations. Users will start by entering their fitness goals into the app. RamEats will personalize the user\'s experience based on their objectives. \nNo more guesswork or endless scrolling through menus with a bad UI! RamEats will ensure that every bite you take aligns with your fitness aspirations. Users will be able to keep tabs on their journey towards better health with a progress tracking feature, and monitor their calorie intake, macronutrient distribution, and more to stay on course. While RamEats provides recommendations, it also empowers you to make informed decisions about your diet. With access to nutritional information and diverse meal options, you\'re in control of your food choices like never before.',
        'SafeCuisine is an app',
        'Functional clone of airbnb recreated using the MERN stack. Styling was handled with tailwind css. This project was created for educational purposes to learn how to better create full-stack applications as I prepare to begin working on publically available web applications.',
        'Approximately 1% of the Earth\'s water is freshwater. As population grows so does the strain on our finite water resources. Using Agricultural Water Usage Calculator people can educate themselves on the impact of the cultivation of the crops they consume. The user can input a crop field size in acres and select a crop type. Using data from academic journals the user\'s input is converted into the amount of gallons used to cultivate one harvest of that crop.\nProject for HackNC 2023 Farming Simulator track.',
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
                    {/* this arrow function creates a line break at each \n */}
                    {/* {photoDescription.split("\n").map((string) => */}
                    <p>
                        {photoDescription}
                    </p>
                    {/* )} */}
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
                            <img src="src\assets\photos\RamEatsLoginPage.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://github.com/OwenMcAllister/RamEats" target='_blank'>Ram Eats</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\SafeCuisinePrototype.png" alt="photo" />
                            <div className='caption'>
                                <a href="" target='_blank'>Safe Cuisine</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\AirbnbCloneHomepage.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://github.com/nathansantiago/AirBnbClone" target='_blank'>AirBnb Clone</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\AgriculturalWaterCalcScreenshot.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://devpost.com/software/agricultural-water-usage-calculator" target='_blank'>Agricultural Water Usage Calculator</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                            <div className='caption'>
                                <a href="" target='_blank'>Video Game Sales For Publishers</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\assets\photos\coding-background-9izlympnd0ovmpli.jpg" alt="photo" />
                            <div className='caption'>
                                <a href="" target='_blank'>Python Weather API</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}