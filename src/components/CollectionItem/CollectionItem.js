//import lib
import React from 'react'

//import style
import './CollectionItem.scss'

//import component
import CustomButton from '../CustomButton/CustomButton'

//import redux state binding function
import {connect} from 'react-redux'

//import redux actions
import {addItem} from '../../redux/cart/cart-actions'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem)