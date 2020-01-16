import React from 'react'
import {connect} from 'react-redux'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../redux/cart/cart-selectors'

const CartDropdown = ({cartItems}) =>  {
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown)
