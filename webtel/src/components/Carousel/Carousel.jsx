import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "@/css/carousel.css";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        const newSlide = slide === data.length - 1 ? 0 : slide + 1;
        setSlide(newSlide);
    };

    const prevSlide = () => {
        const newSlide = slide === 0 ? data.length - 1 : slide - 1;
        setSlide(newSlide);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {data.map((item, idx) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                );
            })}
            <BsArrowRightCircleFill
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};