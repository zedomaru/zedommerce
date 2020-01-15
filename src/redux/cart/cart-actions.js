import {CartActionTypes} from './cart-action-types'

const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}

export default toggleCartHidden