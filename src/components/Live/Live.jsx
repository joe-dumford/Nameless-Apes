// import React from 'react';
// import "./Live.css";
//
// const Live = () => {
//
//     return (
//         <section className="live">
//             <div className="live-holder">
//                 <div className="live-cover">
//                     <div className="live-texts">
//                         <p>Look Inside</p>
//                         <p>OUR LATEST ALBUM</p>
//                         <div className="round-btn">
//                             <i className="icon-play-outline" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default Live;


import React, { useState, useEffect, useMemo } from 'react';
import "./Live.css";
import ApesPodcast from '../../resources/images/ApesPodcast.jpg';
import MerchApe1 from "../../resources/images/MerchApe1.jpg";
import spookyApes from "../../resources/images/spookyApes.jpg";

const Live = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = useMemo(() => [
        'https://bit.ly/44QRvfx',
        'https://bit.ly/44QRvfx',
        // Add more image URLs as needed
    ], []);

    useEffect(() => {
        // Function to update the currentImageIndex
        const rotateImages = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        // Start auto-rotation when the component mounts
        const interval = setInterval(rotateImages, 3000); // Change the duration (in milliseconds) as needed

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [images]);

    const handleNextImage = () => {
        // Function to manually go to the next image
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section className="live">
            <div className="live-holder">
                <div className="live-cover">
                    <div className="live-texts">
                        <p>Look Inside</p>
                        <p>OUR LATEST ALBUM</p>
                        <div className="round-btn">
                            <i className="icon-play-outline" />
                        </div>
                        <button onClick={handleNextImage}>Next Image</button>
                    </div>
                    {/* Display the current image based on the currentImageIndex */}
                    <img className="slider-image" src={images[currentImageIndex]} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Live;
