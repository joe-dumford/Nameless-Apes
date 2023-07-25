import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/UI/Card/Card';
import apesPodcast from '../../resources/images/ApesPodcast.jpg';

const PodcastPage = () => {
    return (
        <div>
            <Banner />
            <h1>Episodes</h1>
            <Card
                image={apesPodcast}
                price={6}
                description={"An Ape"}
            />
        </div>
    );
};

export default PodcastPage;
