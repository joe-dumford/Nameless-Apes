import React from 'react';
import NavBar from "../components/NavBar/NavBar.jsx";
import Banner from "../components/Banner/Banner.jsx";
import LastAlbum from "../components/LastAlbum/LastAlbum";
import Tour from "../components/Tour/Tour";
import Live from "../components/Live/Live";
import MoreContent from "../components/MoreContent/MoreContent";
import Footer from "../components/Footer/Footer";
import Slider from '../components/UI/Slider/Slider';

const PageOne = () => {
    // You can add any state or logic here if needed

    return (
        <>
            <NavBar />
            <Banner />
            <LastAlbum />
            <Tour />
            {/*<Live />*/}
            <Slider />
            <MoreContent />
            <Footer />
        </>
    );
};

export default PageOne;
