import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () => {
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
            </div>
        </div>
    )
}

export default Header