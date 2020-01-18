//import lib
import React from 'react'

//import redux state binding function
import {connect} from 'react-redux'

//import style
import './CartIcon.scss'

//import assets
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

//import reselect
import {selectCartItemsCount} from '../../redux/cart/cart-selectors'
import {createStructuredSelector} from 'reselect'

//import redux actions
import {toggleCartHidden} from '../../redux/cart/cart-actions'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingBag className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
