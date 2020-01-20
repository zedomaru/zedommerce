const INITIAL_STATE = {
    sections: [
        {
            title: "HATS",
            imageURL: 'https://i.imgur.com/od26Zzb.png',
            gifURL: 'https://media.giphy.com/media/3ecFjZfL5myLm/giphy.gif',
            id: 1,
            linkURL: 'shop/hats'
        },
        {
            title: "JACKETS",
            imageURL: 'https://i.imgur.com/vfXQkrg.png',
            gifURL: 'https://media.giphy.com/media/Xd6wgnNbhG3jYmea6m/giphy.gif',
            id: 2,
            linkURL: 'shop/jackets'
        },
        {
            title: "SNEAKERS",
            imageURL: 'https://i.imgur.com/WUguQT5.png',
            gifURL: 'https://media.giphy.com/media/WnNjqFrnbaO4ltp4qy/giphy.gif',
            id: 3,
            linkURL: 'shop/sneakers'
        },
        {
            title: "WOMENS",
            imageURL: 'https://i.imgur.com/lu8NGh1.png',
            gifURL: 'https://media.giphy.com/media/69vd8gWHd38ez8s1XP/giphy.gif',
            id: 4,
            size: 'large',
            linkURL: 'shop/womens'
        },
        {
            title: "MEN",
            imageURL: 'https://i.imgur.com/WatW2aU.png',
            gifURL: 'https://media.giphy.com/media/YMMCWUuttevQt9VoYr/giphy.gif',
            id: 5,
            size: 'large',
            linkURL: 'shop/mens'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
          return state
    }
}

export default directoryReducer