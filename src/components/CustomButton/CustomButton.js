import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, ...buttonProps}) => {
    // console.log('ini ', buttonProps.onClick)
    return (
        <button className='custom-button'  {...buttonProps}> 
            {children}
        </button>
    )
}

export default CustomButton