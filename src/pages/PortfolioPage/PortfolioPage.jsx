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
        'After discovering that our stomachs are often larger than our wallets, we set out to find a way to make shopping more efficient and meaningful. We wanted to prove that with proper planning you can eat well without breaking the bank. Each morning our bot manually goes through Food Lion\'s website taking note of items on sale. We store each sale item in MongoDB, along with the discount amount and original price. We then configure Spoonacular\'s REST API to generate recipes that optimize the number of items on sale called for in the instructions. Each recipe is stored as a MongoDB document and presented on the website. We built a Selenium agent to visit Food Lion\'s website and record information on sale items and discount percentages. Then, the data is sent by FastAPI to MongoDB where the ingredients and their metadata are stored as documents. We created API endpoints that are automatically triggered each morning to repeat scraping to ensure fresh data and generate recipes through the use of Spoonacular\'s API. Each call to Spoonacular requires a list of ingredients and returns JSON data describing possible recipes and the number of ingredients it was able to match from the input in its response. Using this ratio, we calculate the savings and send the information to our Next.js front end.',
        'VTHacks has a prehistoric theme, so we decided that there was no cooler topic to focus on than dinosaurs! Dinologue offers insightful information on three time periods, a dinosaur chatbot named Atticus that can vocally answer your most curious dinosaur questions, and artsy 3D graphics to ensure an immersive experience. We build our application on the Next.js framework, using Tailwind CSS and daisyUI for the frontend, and leveraged OpenAI NLP and ElevenLabs text-to-speech models on the backend. Additionally, we built an interactive 3D model via Blender.',
        'RamEats is an app that will revolutionize your dining experience at Chase and Lenoir. RamEats will be a user-friendly mobile application designed to provide UNC students with daily food recommendations tailored to their fitness goals. Whether you\'re aiming to lose weight, gain muscle, or simply maintain a healthy lifestyle, RamEats will be able to provide dining hall specific nutrition recommendations. Users will start by entering their fitness goals into the app. RamEats will personalize the user\'s experience based on their objectives. \nNo more guesswork or endless scrolling through menus with a bad UI! RamEats will ensure that every bite you take aligns with your fitness aspirations. Users will be able to keep tabs on their journey towards better health with a progress tracking feature, and monitor their calorie intake, macronutrient distribution, and more to stay on course. While RamEats provides recommendations, it also empowers you to make informed decisions about your diet. With access to nutritional information and diverse meal options, you\'re in control of your food choices like never before.',
        'Are you new to Chapel Hill or its surrounding areas and dealing with dietary restrictions? SafeCuisine is here to make dining out stress-free and enjoyable for you! Specifically designed for new residents, including students, SafeCuisine is your go-to app for discovering restaurants that cater to various dietary needs. Whether you\'re gluten-free, vegan, have food allergies, or follow specific dietary guidelines, SafeCuisine ensures you find restaurants that meet your requirements.',
        'Functional clone of airbnb recreated using the MERN stack. Styling was handled with tailwind css. This project was created for educational purposes to learn how to better create full-stack applications as I prepare to begin working on publically available web applications.'
    ];

    const [photoDescription, setPhotoDescription] = useState(descriptionList[0]);

    return (
        <div className="text-zone">
            <div className="portfolio-container">
                <div className='text-container'>
                    <h1 className='header'>
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
                            <img src=".\photos\MealsForLess.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://devpost.com/software/meals-for-less" target='_blank'>Budget Bites</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src=".\photos\Dinologue.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://devpost.com/software/dinologue-apemgf" target='_blank'>Dinologue</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src=".\photos\RamEatsLoginPage.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://github.com/nathansantiago/ram-eats-v3" target='_blank'>Ram Eats</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src=".\photos\SafeCuisinePrototype.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://github.com/nathansantiago/SafeCuisine" target='_blank'>Safe Cuisine</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src=".\photos\AirbnbCloneHomepage.png" alt="photo" />
                            <div className='caption'>
                                <a href="https://github.com/nathansantiago/AirBnbClone" target='_blank'>AirBnb Clone</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}