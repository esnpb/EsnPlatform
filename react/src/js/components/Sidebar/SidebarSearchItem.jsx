import React from "react";

import SearchBox from "../Shared/SearchBox";

export default class SidebarSearchItem extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        return(
            <li class="sidebar-search">
                <SearchBox />
            </li>
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}