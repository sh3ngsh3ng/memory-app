import React from 'react'
import './NavItem.css'

export default function NavItem(props) {
    return (
        <div className='nav-item'>
            <button className='nav-item-btn'>
                {props.activity}
            </button>
        </div>
    )
}