import React from 'react';
import './SideNav.css'
import NavItem from './NavItem';
import { useContext } from 'react';
import { SideNavContext } from '../context/SideNavContext';

export default function SideNav() {
    const items = useContext(SideNavContext)

    return (
        <div id='side-nav'>
            {
                items.map((item) => {
                    return <NavItem activity={item} />
                })
            }
        </div>
    )
}
