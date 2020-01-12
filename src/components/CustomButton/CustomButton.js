import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn , ...buttonProps}) => {
    // console.log('ini ', buttonProps.onClick)
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in google-image' : ''} custom-button`}  {...buttonProps}>
            {children}
        </button>
    )
}

export default CustomButton