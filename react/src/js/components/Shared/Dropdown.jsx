import React from "react";
import DropdownItem from "./Dropdown/DropdownItem";

export default class Dropdown extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        const itemsList = this.props.dropItems.map((item) => {
            return <DropdownItem key={ item.key } type={ item.type } title={ item.title } text={ item.text } href={ item.href } icon={ item.icon } timestamp={ item.timestamp } progress={ item.progress } />;
        });
        return(
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class={ "fa " + this.props.dropButtonClass + " fa-fw" }></i> <i class="fa fa-caret-down"></i>
                </a>
                <ul class={ "dropdown-menu " + this.props.dropdownClass }>
                    { itemsList }
                </ul>
            </li>

            
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}