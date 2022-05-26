import React from 'react';
import "./Logo.scss"

const Logo = ({logoUrl, label}) => {
    return (
        <div className="logo">
            <img src={logoUrl} alt={label} />
            <h1 className="logo-name">{label}</h1>
        </div>
    );
}

export default Logo;