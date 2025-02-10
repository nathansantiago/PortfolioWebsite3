import './AboutPage.scss'

export default function AboutPage() {
    return (
        <div className="text-zone">
            <div className='about-me-container'>
                <div className='text-container'>
                    <div className='header-container'>
                        <h1>
                            <div className="line">
                                <span className="word">
                                    <span className="letter">A</span>
                                    <span className="letter">b</span>
                                    <span className="letter">o</span>
                                    <span className="letter">u</span>
                                    <span className="letter">t</span>
                                </span>
                                <span className="word">
                                    <span className="letter">M</span>
                                    <span className="letter">e</span>
                                </span>
                            </div>
                        </h1>
                    </div>
                    <div className="bio-text-area">
                        <p>
                            I'm a Computer Science and Geography student studying at the University of North Carolina at Chapel Hill.  
                        </p>
                        <p>
                            My programming journey began with making games on my older brother's TI-84 using BASIC. 
                            From there I began exploring game development in Unity with C#.
                            In recent years I've become fascinated with ai and full stack web development, particulalry their applications in solving everyday problems.
                        </p>
                        <p>
                            I continue to view programming as a creative outlet where anything is possible. 
                            I want to create apps that have the potential to improve our everyday lives. 
                            I enjoy nerding out about web applications, data visualization, and artificial intelligence.
                        </p>
                        <p>
                            When I'm not noodling on VSCode, I love to be outdoors. I enjoy rock climbing, surfing, fishing, and playing golf. 
                        </p>
                    </div>
                </div>
                <div className='headshot-container'>
                    <img src=".\photos\Golf.jpeg" id="golf" alt="" />
                    <img src=".\photos\Climbing.jpeg" alt="" />
                    <img src=".\photos\Snowboarding.jpeg" alt="" />
                    <img src=".\photos\Surfing.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}