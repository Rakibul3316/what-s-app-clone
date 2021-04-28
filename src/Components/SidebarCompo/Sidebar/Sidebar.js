import React from 'react'
import './Sidebar.css'
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarSearch from '../SidebarSearch/SidebarSearch'
import SidebarChats from '../SidebarChats/SidebarChats';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarHeader />
            <SidebarSearch />
            <SidebarChats />
        </div>
    )
}

export default Sidebar
