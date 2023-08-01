import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/UI/Card/Card';
import apesPodcast from '../../resources/images/ApesPodcast.jpg';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

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
                    <div className="pod-card">
                        <div className="pod-card-details">
                            <Card
                                image={apesPodcast}
                                title={"Rock Legends Unleashed"}
                                description={"In our debut episode, we kick off the podcast with an electrifying playlist featuring iconic rock legends that have shaped the music industry for generations. From Aerosmith's raw energy to Guns N' Roses' rebellious spirit, and the funk-infused sounds of Red Hot Chili Peppers, we delve into the influential tracks that have left a lasting impact on my own musical journey. Join me as I share personal stories, fun facts, and anecdotes about these legendary artists that have inspired me and countless others."}
                                isDescriptionExpanded={false}
                            />
                        </div>
                    </div>
                    <Card
                        image={apesPodcast}
                        title={"Timeless Tunes by The Beatles & The Eagles"}
                        description={"In this episode, we take a dive into the timeless tunes of two legendary bands: The Beatles and The Eagles. The Beatles, with their unparalleled songwriting and experimental sounds, have left an indelible mark on music history. Meanwhile, The Eagles' harmonies and poetic lyrics have resonated with audiences worldwide. From Sgt. Pepper's Lonely Hearts Club Band to Hotel California, join me as I discuss the significance of these iconic tracks and how they have played a role in shaping my own musical style."}
                        isDescriptionExpanded={false}
                    />
                    <Card
                        image={apesPodcast}
                        title={"Rockin' with The Rolling Stones & Foo Fighters"}
                        description={"Get ready to rock as we explore the enduring impact of The Rolling Stones and the modern-day energy of Foo Fighters. The Rolling Stones' swagger and longevity have made them one of the greatest rock bands of all time, while Foo Fighters' relentless passion for their craft has earned them a special place in the hearts of rock enthusiasts. In this episode, I delve into their discographies, share personal connections to their music, and uncover fascinating stories behind some of their most beloved tracks."}
                        isDescriptionExpanded={false}
                    />
                    <Card
                        image={apesPodcast}
                        title={"Pearl Jam's Grunge Glory"}
                        description={"In this episode, we shift gears to the grunge era and celebrate the pioneering band Pearl Jam. With their emotive lyrics and raw, soulful performances, Pearl Jam brought grunge to the forefront of the 1990s music scene. I'll discuss how their music connected with me on a personal level, and we'll explore the stories behind iconic songs like 'Alive,' 'Black,' and 'Jeremy.' Join me as we pay tribute to the band that brought an emotional intensity to rock music like no other."}
                        isDescriptionExpanded={false}
                    />
                    <Card
                        image={apesPodcast}
                        title={"Rock Odyssey: A Journey Through the Decades"}
                        description={"In this special episode, we take a journey through the decades, revisiting the artists and songs that have been pivotal in shaping my musical identity. From the rock 'n' roll era with The Beatles and The Rolling Stones to the grunge revolution led by Pearl Jam and the contemporary rock anthems of the Foo Fighters, we explore how these influential acts have left a lasting impression on my music and creativity. Get ready for an eclectic mix of rock history, personal anecdotes, and, of course, a handpicked playlist that spans the ages."}
                        isDescriptionExpanded={false}
                    />
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
