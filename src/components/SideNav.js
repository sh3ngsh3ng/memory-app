import React from 'react';
import './SideNav.css'
import NavItem from './NavItem';
import { useContext } from 'react';
import { SideNavContext } from '../context/SideNavContext';

export default function SideNav() {
    const context = useContext(SideNavContext)

    return (
        <div id='side-nav'>
            {
                context.items.map((item) => {
                    return <NavItem activity={item} />
                })
            }
        </div>
    )
}
