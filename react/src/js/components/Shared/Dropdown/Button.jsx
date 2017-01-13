import React from "react";

export default class ButtonDropdownItem extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        const item = this.props;
        return(
            <li>
                <a href={ item.href }>
                    <i class={ "fa fa-fw " + item.icon }></i>
                    { item.title }
                </a>
            </li>
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}