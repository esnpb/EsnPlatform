import React from "react";

export default class ProgressBarDropdownItem extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        const item = this.props;
        const progressBarStyle = {
            width: (item.value) + "%"
        };
        return(
            <li>
                <a href={ item.href }>
                    <div>
                        <p>
                            <strong>{ item.title }</strong>
                            <span class="pull-right text-muted">{ item.value + "% Complete" }</span>
                        </p>
                        <div class="progress progress-striped active">
                            <div class={ "progress-bar progress-bar-" + item.type } 
                                role="progressbar" 
                                aria-valuenow={ item.value } 
                                aria-valuemin={ item.minval }
                                aria-valuemax={ item.maxval } 
                                style={ progressBarStyle }>
                                <span class="sr-only">{ item.val + "% Complete (" + item.type } + ")"</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}