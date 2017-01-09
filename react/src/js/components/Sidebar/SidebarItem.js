import React from "react";

export default class SidebarItem extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        const item = this.props;
        const children = item.items && item.items.length > 0 ? item.items.map((obj) => {             
            return (<SidebarItem key={ obj.key } level={ obj.level } title={ obj.title } icon={ item.icon } href={ obj.href } items={ obj.items } />); 
        }) : [];
        
        return(
            <li key={ item.key }>
                <a href={ item.href }>
                    <i class={ "fa fa-fw " + item.icon }></i>
                    { item.title }
                    { item.items && item.items.length > 0 ? <span class="fa arrow"></span> : "" }
                </a>
                { item.items && item.items.length > 0 ? 
                <ul class={ "nav " + (!item.level ? "nav-second-level" : (item.level == 1 ? "nav-third-level" : (item.level == 2 ? "nav-fourth-level" : ""))) }>
                    { children }
                </ul>
                : "" }
            </li>
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}