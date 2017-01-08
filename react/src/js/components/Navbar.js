import React from "react";
import Sidebar from "./Sidebar";
import NavbarDropdowns from "./Navbar/NavbarDropdowns";

export default class Navbar extends React.Component {
    constructor() {
        super();
        
    }
        
    render(){
        const navStyle = {
            marginBottom: 0
        };
        return(
            <nav class="navbar navbar-default navbar-static-top" role="navigation" style={navStyle}>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">ESN Platform by Karol L. - SB Admin v2.0</a>
                </div>

                <NavbarDropdowns />
                
                <Sidebar />
            </nav>
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}