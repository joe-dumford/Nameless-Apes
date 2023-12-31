import React from 'react';
import Card from '../../components/UI/Card/Card';
import Footer from "../../components/Footer/Footer";
import NavBar from '../../components/NavBar/NavBar';
import merchData from '../../Data/MerchData';

import "./MerchPage.css"

const MerchPage = () => {
    return (
        <div className="merch-page">
            <NavBar />
            <h1 className="merch-header">Merchandise Store</h1>
            <div className="cards-container">
                {merchData.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
            <div className="merch-footer">
                <Footer />
            </div>
        </div>
    );
};

export default MerchPage;

