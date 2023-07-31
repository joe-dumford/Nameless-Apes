// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
//
// const Card = ({ image, title, price, description }) => {
//
//     const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
//
//     const toggleDescription = () => {
//         setIsDescriptionExpanded((prevExpanded) => !prevExpanded);
//     };
//
//     return (
//         <div className="card">
//             <img src={image} alt={description} />
//             <div className="card-details">
//                 <h2>{title}</h2>
//                 <p style={{ maxHeight: isDescriptionExpanded ? 'none' : '70px' }}>{description}</p>
//                 <span className="expand-icon" onClick={toggleDescription}>
//                     {isDescriptionExpanded ? '▲' : '▼'}
//                 </span>
//                 <p>Price: ${price}</p>
//             </div>
//         </div>
//     );
// };
//
// Card.propTypes = {
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number,
//     description: PropTypes.string.isRequired,
// };
//
// export default Card;


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
                <div
                    className={`description-container ${isDescriptionExpanded ? 'expanded' : ''}`}
                >
                    <span className="expand-icon" onClick={toggleDescription}>
                        {isDescriptionExpanded ? '▲' : '▼'}
                    </span>
                        <p>{description}</p>
                </div>
                <p>Price: ${price}</p>
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
