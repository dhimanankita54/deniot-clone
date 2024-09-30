import "./index.css";
import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import gsap from "gsap";

function Item({ text, image, index, length }) {
    const ref = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    useEffect(() => {
        gsap.fromTo(textRef.current,
            { y: 30 },
            {
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top', // Start when the top of the parent hits the top of the viewport
                    end: 'top 10%',
                    scrub: true,
                }
            });
    }, [])

    return (
        <section className="footer-section" ref={sectionRef}>
            <div ref={ref}>
                {index !== length - 1 &&
                    <figure className="progress">
                        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="30"
                                pathLength="1"
                                className="indicator"
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                    </figure>
                }
                <div className="flex w-[460px] h-[270px] items-center justify-center" style={{
                    backgroundImage: [`url(${image})`],
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="text-div mix-blend-overlay" ref={textRef}>
                        <Typography className="text-white text-9xl tracking-wider text-center mix-blend-overlay font-alike">
                            {text}
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Footer() {

    const items = [
        { text: "Interior Design", image: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww" },
        { text: "Architecture", image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww" },
        { text: "Furniture", image: "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" },
        { text: "Books", image: "https://images.unsplash.com/photo-1616330682546-2468b2d8dd17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzfGVufDB8fDB8fHww" },
    ];

    return (
        <>
            {items.map((x, index) => (
                <Item key={index} text={x.text} image={x.image} index={index} length={items.length} />
            ))}

            <div className="bg-[#8e8c8c] flex items-center justify-center p-4 text-white font-alike w-full h-fit">
                Created By Ankita Dhiman ❤️
            </div>
        </>
    );
}
