import React from 'react'
import './NavItem.css'
import { useContext } from 'react'
import { SideNavContext } from '../context/SideNavContext'

export default function NavItem(props) {
    const context = useContext(SideNavContext)
    return (
        <div className='nav-item'>
            <button className='nav-item-btn' onClick={() => {
                context.setSystem(props.activity)
            }}>
                <span>{props.activity}</span>
            </button>
        </div>
    )
}