import { Typography } from "@material-tailwind/react";
import './index.css';
import { useEffect, useRef, useState } from "react";
import Scroll from "../Scroll";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ListScroll from "../ListScroll";
import Footer from "../Footer";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {

    const STYLES = {
        videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
    }
    const [clipPath, setClipPath] = useState('');
    const [isVideoExpanded, setIsVideoExpanded] = useState(false);

    useEffect(() => {
        const updateClipPath = () => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            // Calculate initial values based on screen size
            const initialTop = windowHeight * 0.3; // 30% of the screen height
            const initialRight = windowWidth * 0.4; // 40% of the screen width

            setClipPath(`inset(${initialTop}px ${initialRight}px)`);

            const handleScroll = () => {
                const scrollY = window.scrollY;

                // Update video clipPath based on scroll position
                const top = Math.max(windowHeight * 0.3 - scrollY, 0);
                const right = Math.max(windowWidth * 0.4 - scrollY, 0);
                setClipPath(`inset(${top}px ${right}px)`);

                if (top === 0 && right === 0) {
                    setIsVideoExpanded(true);
                } else {
                    setIsVideoExpanded(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', updateClipPath);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', updateClipPath);
            };
        };

        updateClipPath();
    }, []);

    // Ensure ScrollTrigger refreshes after the entire page mounts
    useEffect(() => {
        ScrollTrigger.refresh(); // Force recalculation of ScrollTrigger's positions
    }, [isVideoExpanded]);

    return (
        <>
            <section >
                <div >
                    <div className="row">
                        <div >
                            <div className="img-bg" style={{ clipPath: clipPath }}>
                                <div className="content-wrapper absolute top-0 left-0 bg-[#ededed] w-full h-full">
                                    <iframe
                                        src="https://player.vimeo.com/video/505223053?controls=0&loop=true&autoplay=true&muted=true&gesture=media&playsinline=true&byline=false&portrait=false&title=false&speed=true&transparent=false"
                                        width="100%"
                                        height="500"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={STYLES.videoIframe}
                                    />
                                </div>
                            </div>
                            <div className="content">
                                <Typography className="fixed-content absolute text-center text-5xl text-[#505559] font-alike">
                                    Design your life and dreams
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`next-section ${isVideoExpanded ? 'show bg-[#ededed] ' : ''}`}>
                    <div className="h-screen flex items-center justify-center font-alike">
                        <Typography className="text-center text-5xl text-[#505559]">Jean-Louis Deniot</Typography>
                    </div>

                    <Scroll />
                    <ListScroll />
                    <Footer/>

                </div>



            </section>
        </>
    )
}

export default Home; 