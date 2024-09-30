import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.css";
import gsap from "gsap";

// eslint-disable-next-line react/prop-types
function Cursor() {

    useEffect(() => {
        let posX = 0,
            posY = 0;

        let mouseX = 0,
            mouseY = 0;

        const cursor = document.querySelector(".cursor-example");

        gsap.to(".cursor-example", {
            duration: 0.018,
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 8;
                posY += (mouseY - posY) / 8;

                gsap.set(".cursor-example", {
                    css: {
                        left: posX - 1,
                        top: posY - 2
                    }
                });
            }
        });

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        return () => {
            document.removeEventListener("mousemove", (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        };

    })

    return (
        <>
            <div className="cursor"></div>

            <div className="cursor-example"></div>
        </>
    );
}

export default Cursor;
