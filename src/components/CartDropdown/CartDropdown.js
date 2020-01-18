// import lib
import React from 'react'

//import style
import './CartDropdown.scss'

//import redux state binding function
import {connect} from 'react-redux'

//import component
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'

//import reselect
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart-selectors'

//import react router
import {withRouter} from 'react-router-dom'

import {toggleCartHidden} from '../../redux/cart/cart-actions'

const CartDropdown = ({cartItems, history, dispatch}) =>  {
    console.log('cart dropdown cartItems', cartItems)
    console.log('cart dropdown history', history)
    // console.log('cart props ', cartProps)
    // console.log(match)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    (
                        cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                        })
                    )
                    :
                    (<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
