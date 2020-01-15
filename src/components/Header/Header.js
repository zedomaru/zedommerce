import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase'
import CartIcon from '../CartIcon/CartIcon'

// CONNECT =  function to bind a component with reducers
import {connect} from 'react-redux'

const Header = ({currentUser}) => {
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header)