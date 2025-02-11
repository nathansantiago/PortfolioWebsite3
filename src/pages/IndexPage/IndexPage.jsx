import './IndexPage.scss'

import Spline from '@splinetool/react-spline';

export default function IndexPage() {
    return (
        <div className='text-zone'>
            <div className="index-container">
                <div className="text-container">
                    <h1 className='introduction'>
                        <div className='line'>
                            <span className='word'>
                                <span className="letter">H</span>
                                <span className="letter">i</span>
                                <span className="letter">,</span>
                            </span>
                        </div>
                        <div className="line">
                            <span className='word'>
                                <span className="letter">I</span>
                                <span className="letter">'</span>
                                <span className="letter">m</span>
                            </span>
                            <span className='word'>
                                <span className="letter">N</span>
                                <span className="letter">a</span>
                                <span className="letter">t</span>
                                <span className="letter">h</span>
                                <span className="letter">a</span>
                                <span className="letter">n</span>
                            </span>
                        </div>
                        <div className="line">
                            <span className='word'>
                                <span className="letter">a</span>
                            </span>
                            <span className='word'>
                                <span className="letter">d</span>
                                <span className="letter">e</span>
                                <span className="letter">v</span>
                                <span className="letter">e</span>
                                <span className="letter">l</span>
                                <span className="letter">o</span>
                                <span className="letter">p</span>
                                <span className="letter">e</span>
                                <span className="letter">r</span>
                                <span className="letter">.</span>
                            </span>
                        </div>
                    </h1>
                    <h2 className='subheader'>
                        Fullstack developer @ Virnika
                    </h2>
                </div>
                {/* <div className="spline-container">
                    <Spline
                        scene="https://prod.spline.design/aP4cotlzZdRz9F6U/scene.splinecode" className='disable-spline'
                    />
                </div> */}
            </div>
        </div>
    );
}