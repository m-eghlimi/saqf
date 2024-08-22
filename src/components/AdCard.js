import React from 'react';

const AdCard = ({ title, description }) => {
    return (
        <div className="ad-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default AdCard;