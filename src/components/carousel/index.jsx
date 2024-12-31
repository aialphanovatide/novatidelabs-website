import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./carousel.css"
import Home from '../Home';
import Footer from '../footer';
import Design from '../Design/Design';
import Modular from '../Modular/Modular';
import Ai from '../Ai/Ai';
import Casestudies from '../Casestudies/Casestudies';
import Contactus from '../Contactus/Contactus';

function Carousel({slideIndex, setSlideIndex, isScrollFinished, openPopup}) {
    const splideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        setSlideIndex(currentIndex);
      }, [(currentIndex)]);

    useEffect(() => {
        if (splideRef.current) {
          splideRef.current.go(slideIndex);}
      }, [(slideIndex)]);

  return (
    <>
        <div className='slide_container'>
            <Splide ref={splideRef} options={{
                type: 'loop',
                perPage: 1,
                autoHeight: true,
                height: 'auto',
                width: '100%',
                }}
                onMove={(splide, newIndex) => setCurrentIndex(newIndex)}
                >
                <SplideSlide className="splide-slide is-active">
                    <Home />
                </SplideSlide>
                <SplideSlide className="splide-slide">
                        <Design isActive={currentIndex === 1} isScrollFinished={isScrollFinished} setSlideIndex={setSlideIndex} />
                    </SplideSlide>
                    <SplideSlide className="splide-slide">
                        <Modular isActive={currentIndex === 2} isScrollFinished={isScrollFinished} setSlideIndex={setSlideIndex} />
                    </SplideSlide>
                    <SplideSlide className="splide-slide">
                        <Ai isActive={currentIndex === 3} isScrollFinished={isScrollFinished} setSlideIndex={setSlideIndex} />
                    </SplideSlide>
                <SplideSlide className="splide-slide">
                    <Casestudies openPopup={openPopup}/>
                </SplideSlide>
                <SplideSlide className="splide-slide">
                    <Contactus />
                </SplideSlide>
            </Splide>
        </div>
    </>
  )
}

export default Carousel