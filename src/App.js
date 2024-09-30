import logo from './logo.svg';
import './App.css';
import Router from './routes';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Cursor from './common/components/CustomCursor';

function App() {

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  })

  return (
    <>
      <Cursor />
      <Router />
    </>
  );
}

export default App;
