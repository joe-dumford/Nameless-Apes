// src/components/Card.js

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, price, description }) => {
    return (
        <div className="card">
            <img src={image} alt={description} />
            <div className="card-details">
                <h3>{description}</h3>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
