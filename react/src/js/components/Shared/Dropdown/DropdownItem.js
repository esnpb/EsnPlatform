import React from "react";

import ButtonDropdownItem from "./Button";
import MessageDropdownItem from "./Message";
import NotificationDropdownItem from "./Notification";
import ProgressBarDropdownItem from "./ProgressBar";
import SeeAllDropdownItem from "./SeeAll";

export default class DropdownItem extends React.Component {
    constructor() {
        super();        
    }
    
    render(){
        const item = this.props;
        switch(item.type)
        {
            case "button": {
                return(
                    <ButtonDropdownItem key={ item.key } title={ item.title } href={ item.href } icon={ item.icon } />
                );
            }
            case "message": {
                console.log("item> ", item);
                return (
                    <MessageDropdownItem key={ item.key } title={ item.title } text={ item.text } href={ item.href } timestamp={ item.timestamp } />
                );
            }
            case "notification": {
                return(
                    <NotificationDropdownItem key={ item.key } title={ item.title } href={ item.href } icon={ item.icon } timestamp={ item.timestamp } />
                );
                    
            }                
            case "progressbar": {
                if(!item.progress)
                    throwError("Progress nie istnieje w props");
                return (
                    <ProgressBarDropdownItem key={ item.key } title={ item.title } href={ item.href } value={ item.progress.val } minval={ item.progress.minval } maxval={ item.progress.maxval } type={ item.progress.type } />
                );
            }
            case "see-all": {
                return(
                    <SeeAllDropdownItem key={ item.key } title={ item.title } href={ item.href } />
                );
            }
            case "divider": {
                return(
                    <li class="divider"></li>
                );
            }
            default: {
                return <li></li>;
            }
        }
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}