import React from "react";

import UserDropdown from "./UserDropdown";
import AlertDropdown from "./AlertDropdown";
import TaskDropdown from "./TaskDropdown";
import MessageDropdown from "./MessageDropdown";

export default class NavbarDropdowns extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        return(
            <ul class="nav navbar-top-links navbar-right">
                <MessageDropdown />
                <TaskDropdown />
                <AlertDropdown />
                <UserDropdown />
            </ul>
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}