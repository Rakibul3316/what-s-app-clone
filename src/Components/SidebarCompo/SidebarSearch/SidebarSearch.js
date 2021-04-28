import React from 'react';
import './SidebarSearch.css'
import SearchIcon from '@material-ui/icons/Search';

const SidebarSearch = () => {
    return (
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchIcon />
                <input type="text" placeholder="Search or start new chat" />
            </div>
        </div>
    );
};

export default SidebarSearch;