import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, price, description }) => {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className="card">
            <img src={image} alt={description} />
            <div className="card-details">
                <h2>{title}</h2>
                <div className={`description-container ${isDescriptionExpanded ? 'expanded' : ''}`}>
                    <p
                        className={`description-text ${isDescriptionExpanded ? 'expanded' : ''}`}
                        style={{ whiteSpace: isDescriptionExpanded ? 'normal' : 'nowrap' }}
                    >
                        {description}
                    </p>
                    {!isDescriptionExpanded && (
                        <span className="read-more" onClick={toggleDescription}>
                            Read more
                        </span>
                    )}
                </div>
                {isDescriptionExpanded && (
                    <span className="expand-icon" onClick={toggleDescription}>
                        ▲
                    </span>
                )}
                {!isDescriptionExpanded && <p>Price: ${price}</p>}
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string.isRequired,
};

export default Card;
