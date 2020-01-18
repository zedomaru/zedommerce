//import lib
import React from 'react'

//import style
import './MenuItem.scss'

//import react router
import { withRouter } from 'react-router-dom' //this is for taking history and match props

const MenuItem = ({title, imageURL, size, gifURL, history, linkURL, match}) => {
    // console.log(history)
    return (
        <div 
            className={`${size} menu-item`} 
            onClick={() => history.push(`${match.url}${linkURL}`)}>
            <div 
                className="background-image"
                style={{backgroundImage: `url(${gifURL})`}} 
                />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)