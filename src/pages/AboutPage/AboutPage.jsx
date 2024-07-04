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
                            I'm a Computer Science student studying at the University of North Carolina at Chapel Hill.  
                        </p>
                        <p>
                            My programming journey began with making games on my DS and older brother's TI-84 using BASIC. 
                            From there I began exploring game development in Unity with C#.
                        </p>
                        <p>
                            I continue to view programming as a creative outlet to express our wildest dreams. 
                            Over the last year I've shifted my focus from game development to web development and data visualization. 
                            I want to create web apps that have the potential to improve our everyday lives. 
                            I am passionate about game development, web applications, and data visualization.
                        </p>
                        <p>
                            In my freetime I love to be outdoors. I enjoy rock climbing, fishing, running, and playing golf. 
                        </p>
                    </div>
                </div>
                <div className='headshot-container'>
                    <img src="src\assets\photos\ProfessionalHeadshot1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}