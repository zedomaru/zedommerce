//import lib
import React from 'react'

//import style
import './Header.scss'

//import assets
import {ReactComponent as Logo} from '../../assets/crown.svg'

//import react router
import {Link} from 'react-router-dom'

//import firebase 
import {auth} from '../../firebase/firebase'

//import component
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

//import reselect
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart-selectors'
import {selectCurrentUser} from '../../redux/user/user-selectors'

// CONNECT =  function to bind a component state with reducers
import {connect} from 'react-redux'

const Header = ({currentUser, hidden}) => {
    // const logo = 'https://media.giphy.com/media/jTxVZEItpLGLl7DM7E/giphy.gif'
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div> 
                    : 
                    <Link to='/sign-in' className='option'>
                        SIGN IN
                    </Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}) 
    


export default connect(mapStateToProps)(Header)