import {combineReducers} from 'redux'

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})

// redux tips 101:
// 1. create glue layer to wrap our whole application (using Provider from REACT-REDUX)
// 2. passing store as a props for the provider
// 3. store berguna untuk menyimpan state application. cara merubah state yang ada di dalam store adalah
//    dengan DISPATCH ACTION
// 4. 

//REWATCH
// CHAPTER 8 part 15 menit 10 sampe selesai
// CHAPTER 8 part 16 CART UTILS