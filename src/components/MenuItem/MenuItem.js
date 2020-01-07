import React from 'react'
import './MenuItem.scss'

const MenuItem = ({title, imageURL, size, gifURL}) => {
    return (
        <div className={`${size} menu-item`}>
            <div 
                className="background-image"
                style={{backgroundImage: `url(${imageURL})`}} 
                />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem