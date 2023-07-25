import React, { useState, useEffect } from 'react';
import './Slider.css';

import AwkwardHug from "../../../resources/images/Slider/AwkwardHug.jpg";
import AwkwardHug2 from "../../../resources/images/Slider/AwkwardHug2.jpg";
import AwkwardHug3 from "../../../resources/images/Slider/AwkwardHug3.jpg";
import AwkwardHug4 from "../../../resources/images/Slider/AwkwardHug4.jpg";
import AwkwardHug5 from "../../../resources/images/Slider/AwkwardHug5.jpg";
import AwkwardHug6 from "../../../resources/images/Slider/AwkwardHug6.jpg";
import AwkwardHug7 from "../../../resources/images/Slider/AwkwardHug7.jpg";

const Slider = ({ autoRotateInterval = 5000 }) => {
    // Internal array of image URLs
    const images = [
        AwkwardHug,
        AwkwardHug2,
        AwkwardHug3,
        AwkwardHug4,
        AwkwardHug5,
        AwkwardHug6,
        AwkwardHug7,
        // Add more image URLs as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle manual navigation to previous image
    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to handle manual navigation to next image
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to automatically rotate through images
    useEffect(() => {
        const autoRotateTimer = setInterval(goToNextImage, autoRotateInterval);
        return () => clearInterval(autoRotateTimer);
    }, [autoRotateInterval]);

    return (
        <div className="slider-container">
            <div className="slider"
                style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                    transition: 'transform 0.5s ease-out',
                }}
            >
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={goToPreviousImage}>
                &#8249;
            </button>
            <button className="next-button" onClick={goToNextImage}>
                &#8250;
            </button>

            {/* Indicator Dots */}
            <div className="indicator-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active-indicator' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
