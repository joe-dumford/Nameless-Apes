import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/UI/Card/Card';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import podcastData from '../../Data/PodcastData';

import "./PodcastPage.css";

const PodcastPage = () => {
    return (
        <div>
            <NavBar/>
            <div className="banner">
                <Banner />
            </div>
            <div className="podcast-wrapper">
                <h1>Episodes</h1>
                <div className="pod-cards-container">
                    {podcastData.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
            <div className="podcast-foot-wrapper">
                <div className="podcast-inner-footer" />
                <div className="podcast-footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default PodcastPage;
