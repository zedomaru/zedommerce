import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)

// redux tips 101:
// 1. create glue layer to wrap our whole application (using Provider from REACT-REDUX)
// 2. passing store as a props for the provider
// 3. store berguna untuk menyimpan state application. cara merubah state yang ada di dalam store adalah
//    dengan DISPATCH ACTION
// 4. 

//REWATCH
// CHAPTER 8 part 15 menit 10 sampe selesai
// CHAPTER 8 part 16 CART UTILS
// CHAPTER 8 part 20 & 22 redux selectors
// CHAPTER 8 part 29 remove item passing
// CHAPTER 8 part 30 decrease item logic