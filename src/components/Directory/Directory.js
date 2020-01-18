//import lib
import React, { Component } from 'react'

//import style
import './Directory.scss'

//import component
import MenuItem from '../MenuItem/MenuItem'

class Directory extends Component {
    state = {
        sections: [
            {
                title: "HATS",
                imageURL: 'https://i.imgur.com/od26Zzb.png',
                gifURL: 'https://media.giphy.com/media/3ecFjZfL5myLm/giphy.gif',
                id: 1,
                linkURL: 'hats'
            },
            {
                title: "JACKETS",
                imageURL: 'https://i.imgur.com/vfXQkrg.png',
                gifURL: 'https://media.giphy.com/media/Xd6wgnNbhG3jYmea6m/giphy.gif',
                id: 2,
                linkURL: 'jackets'
            },
            {
                title: "SNEAKERS",
                imageURL: 'https://i.imgur.com/WUguQT5.png',
                gifURL: 'https://media.giphy.com/media/WnNjqFrnbaO4ltp4qy/giphy.gif',
                id: 3,
                linkURL: 'sneakers'
            },
            {
                title: "WOMENS",
                imageURL: 'https://i.imgur.com/lu8NGh1.png',
                gifURL: 'https://media.giphy.com/media/69vd8gWHd38ez8s1XP/giphy.gif',
                id: 4,
                size: 'large',
                linkURL: 'womens'
            },
            {
                title: "MEN",
                imageURL: 'https://i.imgur.com/WatW2aU.png',
                gifURL: 'https://media.giphy.com/media/YMMCWUuttevQt9VoYr/giphy.gif',
                id: 5,
                size: 'large',
                linkURL: 'men'
            },
        ],
        hover: false
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {
        const { sections } = this.state
        return (
            <div className="directory-menu">
                {
                        sections.map(({title, imageURL, id, size, gifURL, linkURL}) => {
                        return <MenuItem 
                                    key={id} 
                                    title={title} 
                                    imageURL={imageURL} 
                                    size={size} 
                                    gifURL={gifURL} 
                                    linkURL={linkURL}
                                    />
                    })
                }
            </div>
        )
    }
}

export default Directory
