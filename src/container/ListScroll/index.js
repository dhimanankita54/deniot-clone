import './index.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

function ListScroll() {

    const parentRef = useRef(null);
    const containerRef = useRef(null);
    const textDivRef = useRef(null);

    const countries = [
        { country: "Paris", image: "https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" },
        { country: "France", image: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" },
        { country: "London", image: "https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yfGVufDB8fDB8fHww" },
        { country: "New York", image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D" },
        { country: "Floride", image: "https://plus.unsplash.com/premium_photo-1664301231899-5a7b1a621238?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvb218ZW58MHx8MHx8fDA%3D" },
        { country: "Chicago", image: "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb218ZW58MHx8MHx8fDA%3D" },
        { country: "Los Angeles", image: "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJvb218ZW58MHx8MHx8fDA%3D" },
        { country: "Capri", image: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb218ZW58MHx8MHx8fDA%3D" },
        { country: "Bangkok", image: "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJvb218ZW58MHx8MHx8fDA%3D" },
        { country: "Hong Kong", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8fDA%3D" },
        { country: "New Delhi", image: "https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJvb218ZW58MHx8MHx8fDA%3D" },
        { country: "Moscow", image: "https://plus.unsplash.com/premium_photo-1681487759376-eadc88baa36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHJvb218ZW58MHx8MHx8fDA%3D" },
    ]

    useLayoutEffect(() => {

        gsap.fromTo(containerRef.current, {
            y: '110%', // Start from below (out of view)
            scale: 2, //Start with an opacity of 0
            height: '50px',
            left: "100%",
            position: "absolute",
            transformOrigin: 'center', // Scale from the bottom
        }, {
            y: '-40%', // Move to its original position
            scale: 0.4, // Fade to visible
            height: '30px',
            left: "20%",
            transformOrigin: 'center', // Scale from the bottom
            stagger: 0.1, // Stagger the animations
            scrollTrigger: {
                trigger: parentRef.current,
                start: 'bottom bottom', // Start when the bottom of the parent hits the bottom of the viewport
                end: '+=1000', // Adjust this to control how far you want the scroll effect to last
                scrub: true, // Smooth scrolling effect
                pin: true, // Pin the parent while scrolling
                markers: false,
                onEnter: () => gsap.to(textDivRef.current, { autoAlpha: 0, duration: 0.3, delay: 0.4 }), // Hide on enter
                onLeaveBack: () => gsap.to(textDivRef.current, { autoAlpha: 1, duration: 0.3 }), // Show on leave back
            },
        });

        // Cleanup function to kill the ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useLayoutEffect(() => {
        gsap.set('.text img.hover-image', { yPercent: -50, xPercent: -50, x: 0 });

        let activeImage;
        gsap.utils.toArray(".text").forEach((el) => {
            let image = el.querySelector('img.hover-image'),
                setX,
                align = e => {
                    const bounds = el.getBoundingClientRect();
                    const xOffset = ((e.clientX - bounds.left) / bounds.width - 0.5) * 100;
                    setX(xOffset);
                },
                startFollow = () => document.addEventListener("mousemove", align),
                stopFollow = () => document.removeEventListener("mousemove", align),
                fade = gsap.to(image, {
                    autoAlpha: 1,
                    ease: "none",
                    paused: true,
                    onReverseComplete: () => {
                        stopFollow();
                        gsap.set(image, { autoAlpha: 0, visibility: 'hidden' }); // Ensure the image is hidden
                    },
                });

            el.addEventListener('mouseenter', (e) => {
                fade.play();
                startFollow();
                if (activeImage) { // if there's an actively-animating one, we should match its position here
                    gsap.set(image, {
                        x: gsap.getProperty(activeImage, "x"),
                    });
                }
                activeImage = image;
                setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" });
                align(e);
                // gsap.set(image, { visibility: 'visible', autoAlpha: 1 });
            });

            el.addEventListener('mouseleave', () => fade.reverse());

        });

    }, [])

    return (
        <>
            <div ref={parentRef} className="parent">
                <div ref={textDivRef} className='text-div'>
                    <p className='text-5xl text-[#505559] font-alike'>Our international interiors</p>
                </div>
                <div className="container-div">
                    <div ref={containerRef} className="container">
                        {countries.map((country, index) => (
                            <div key={index} className="text">
                                <p className='country-name'>
                                    {country.country}
                                </p>
                                <img src={country.image} className='hover-image' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListScroll;

