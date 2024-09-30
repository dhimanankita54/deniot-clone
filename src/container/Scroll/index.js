import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Scroll = () => {
    const scrollContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollContainerRef,
        offset: ["start start", "end end"], // Keep the scroll behavior aligned
    });

    return (
        <div ref={scrollContainerRef} className="bg-neutral-800">
            {/* Wrapping both sections in a single container */}
            <section className="relative h-[600vh]"> {/* Extended height for scrolling */}
                <div className="sticky top-0 flex h-screen flex-col justify-center">
                    {/* First Carousel: Moves Left to Right */}
                    <HorizontalScrollCarousel scrollYProgress={scrollYProgress} />
                    {/* Second Carousel: Moves Right to Left */}
                    <HorizontalScrollCarouselOpposite scrollYProgress={scrollYProgress} />
                </div>
            </section>
        </div>
    );
};

const HorizontalScrollCarousel = ({ scrollYProgress }) => {
    // First carousel moves from left to right
    // Enter the screen, stay, and then move off-screen to the right
    const x = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "0%", "19.3%"]);

    return (
        <div className="flex h-screen items-end overflow-hidden">
            <motion.div style={{ x }} className="flex gap-6">
                {cards.map((card) => (
                    <Card card={card} key={card.id} />
                ))}
            </motion.div>
        </div>
    );
};

const HorizontalScrollCarouselOpposite = ({ scrollYProgress }) => {
    // Second carousel moves from right to left
    // Enter the screen, stay, and then move off-screen to the left
    const x = useTransform(scrollYProgress, [0, 0.5, 1], ["19.3%", "0%", "-100%"]);
    
    return (
        <div className="flex h-screen mt-6 items-start overflow-hidden">
            <motion.div style={{ x }} className="flex gap-6">
                {cardsTwo.map((card) => (
                    <Card card={card} key={card.id} />
                ))}
            </motion.div>
        </div>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[200px] w-[300px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            {/* <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div> */}
        </div>
    );
};

export default Scroll;

const cards = [
    { url: 'https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg', id: 1, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 2, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 3, title: "Title 3" },
    { url: 'https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 4, title: "Title 4" },
    { url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 5, title: "Title 5" },
    { url: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 6, title: "Title 6" },
    { url: 'https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg', id: 7, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 8, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 9, title: "Title 3" },
    { url: 'https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 10, title: "Title 4" },
    { url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 11, title: "Title 5" },
    { url: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 12, title: "Title 6" },
    { url: 'https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg', id: 13, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 14, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 15, title: "Title 3" },
    { url: 'https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 16, title: "Title 4" },
    { url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 17, title: "Title 5" },
    { url: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 18, title: "Title 6" },
    { url: 'https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg', id: 19, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 20, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 21, title: "Title 3" },
    { url: 'https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 22, title: "Title 4" },
    { url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 23, title: "Title 5" },
    { url: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 24, title: "Title 6" },
    { url: 'https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg', id: 25, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 26, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 27, title: "Title 3" },
    { url: 'https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 28, title: "Title 4" },
    { url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 29, title: "Title 5" },
    { url: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 30, title: "Title 6" },

];
const cardsTwo = [
    { url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 1, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 2, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 3, title: "Title 3" },
    { url: 'https://media.istockphoto.com/id/1449624572/photo/midcentury-modern-interior-design-with-yellow-sofa-and-decoration-wall-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=forOtS_xohOs6s2cvAJ-54EgCsaGkMTfnVfF2ZrlAC4=', id: 4, title: "Title 4" },
    { url: 'https://media.istockphoto.com/id/1217234823/photo/3d-rendering-of-a-kitchen-bay-and-dining-area-in-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=GLyxf3TE5eGiYzC7rFTMReXUzXwMNckhT5FLi6avXNA=', id: 5, title: "Title 5" },
    { url: 'https://media.istockphoto.com/id/1824615178/photo/interior-design-of-modern-apartment-with-colorful-dark-walls-and-orange-sofa-interior-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfKYRLlYXXioLkpO8H03ngEN4MWYt8l4T3PWOV6_h74=', id: 6, title: "Title 6" },
    { url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 7, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 8, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 9, title: "Title 3" },
    { url: 'https://media.istockphoto.com/id/1449624572/photo/midcentury-modern-interior-design-with-yellow-sofa-and-decoration-wall-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=forOtS_xohOs6s2cvAJ-54EgCsaGkMTfnVfF2ZrlAC4=', id: 10, title: "Title 4" },
    { url: 'https://media.istockphoto.com/id/1217234823/photo/3d-rendering-of-a-kitchen-bay-and-dining-area-in-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=GLyxf3TE5eGiYzC7rFTMReXUzXwMNckhT5FLi6avXNA=', id: 11, title: "Title 5" },
    { url: 'https://media.istockphoto.com/id/1824615178/photo/interior-design-of-modern-apartment-with-colorful-dark-walls-and-orange-sofa-interior-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfKYRLlYXXioLkpO8H03ngEN4MWYt8l4T3PWOV6_h74=', id: 12, title: "Title 6" },
    { url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 13, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 14, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 15, title: "Title 3" },
    { url: 'https://media.istockphoto.com/id/1449624572/photo/midcentury-modern-interior-design-with-yellow-sofa-and-decoration-wall-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=forOtS_xohOs6s2cvAJ-54EgCsaGkMTfnVfF2ZrlAC4=', id: 16, title: "Title 4" },
    { url: 'https://media.istockphoto.com/id/1217234823/photo/3d-rendering-of-a-kitchen-bay-and-dining-area-in-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=GLyxf3TE5eGiYzC7rFTMReXUzXwMNckhT5FLi6avXNA=', id: 17, title: "Title 5" },
    { url: 'https://media.istockphoto.com/id/1824615178/photo/interior-design-of-modern-apartment-with-colorful-dark-walls-and-orange-sofa-interior-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfKYRLlYXXioLkpO8H03ngEN4MWYt8l4T3PWOV6_h74=', id: 18, title: "Title 6" },
    { url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 19, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 20, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 21, title: "Title 3" },
    { url: 'https://media.istockphoto.com/id/1449624572/photo/midcentury-modern-interior-design-with-yellow-sofa-and-decoration-wall-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=forOtS_xohOs6s2cvAJ-54EgCsaGkMTfnVfF2ZrlAC4=', id: 22, title: "Title 4" },
    { url: 'https://media.istockphoto.com/id/1217234823/photo/3d-rendering-of-a-kitchen-bay-and-dining-area-in-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=GLyxf3TE5eGiYzC7rFTMReXUzXwMNckhT5FLi6avXNA=', id: 23, title: "Title 5" },
    { url: 'https://media.istockphoto.com/id/1824615178/photo/interior-design-of-modern-apartment-with-colorful-dark-walls-and-orange-sofa-interior-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfKYRLlYXXioLkpO8H03ngEN4MWYt8l4T3PWOV6_h74=', id: 24, title: "Title 6" },
    { url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', id: 25, title: "Title 1" },
    { url: 'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 26, title: "Title 2" },
    { url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', id: 27, title: "Title 3" },
    { url: 'https://media.istockphoto.com/id/1449624572/photo/midcentury-modern-interior-design-with-yellow-sofa-and-decoration-wall-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=forOtS_xohOs6s2cvAJ-54EgCsaGkMTfnVfF2ZrlAC4=', id: 28, title: "Title 4" },
    { url: 'https://media.istockphoto.com/id/1217234823/photo/3d-rendering-of-a-kitchen-bay-and-dining-area-in-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=GLyxf3TE5eGiYzC7rFTMReXUzXwMNckhT5FLi6avXNA=', id: 29, title: "Title 5" },
    { url: 'https://media.istockphoto.com/id/1824615178/photo/interior-design-of-modern-apartment-with-colorful-dark-walls-and-orange-sofa-interior-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfKYRLlYXXioLkpO8H03ngEN4MWYt8l4T3PWOV6_h74=', id: 30, title: "Title 6" },
];
