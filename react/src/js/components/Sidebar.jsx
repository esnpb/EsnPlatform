import React from "react";

import SidebarItem from "./Sidebar/SidebarItem";
import SidebarSearchItem from "./Sidebar/SidebarSearchItem";

export default class Sidebar extends React.Component {
    constructor() {
        super();
        
    }
    
    render(){
        const itemsTree = [
            { key: 1, level: 0, href: "index.html", icon: "fa-dashboard", title: "Dashboard" },
            { key: 2, level: 0, href: "#", title: "Charts", icon: "fa-bar-chart-o", items: [
                { key: 3, level: 1, href: "flot.html", title: "Flot Charts" },
                { key: 4, level: 1, href: "morris.html", title: "Morris.js Charts" },
            ] },
            { key: 5, level: 0, href: "tables.html", title: "Tables", icon: "fa-table" },
            { key: 6, level: 0, href: "forms.html", title: "Forms", icon: "fa-edit" },
            { key: 7, level: 0, href: "#", title: "UI Elements", icon: "fa-wrench", items: [
                { key: 8, level: 1, href: "panels-wells.html", title: "Panels and Wells" },
                { key: 9, level: 1, href: "buttons.html", title: "Buttons" },
                { key: 10, level: 1, href: "notifications.html", title: "Notifications" },
                { key: 11, level: 1, href: "typography.html", title: "Typography" },
                { key: 12, level: 1, href: "icons.html", title: "Icons" },
                { key: 13, level: 1, href: "grid.html", title: "Grid" },
            ] },
            { key: 14, level: 0, href: "#", title: "Multi-Level Dropdown", icon: "fa-sitemap", items: [
                { key: 15, level: 1, href: "#", title: "Second Level Item" },
                { key: 16, level: 1, href: "#", title: "Second Level Item" },
                { key: 17, level: 1, href: "#", title: "Second Level Item", items: [
                    { key: 18, level: 2, href: "#", title: "Third Level Item" },
                    { key: 19, level: 2, href: "#", title: "Third Level Item" },
                    { key: 20, level: 2, href: "#", title: "Third Level Item" },
                    { key: 21, level: 2, href: "#", title: "Third Level Item" }
                ] }
            ] },
            { key: 22, level: 0, href: "#", title: "Sample Pages", icon: "fa-files-o", items: [
                { key: 23, level: 1, href: "blank.html", title: "Blank page" },
                { key: 24, level: 1, href: "login.html", title: "Login page" }
            ] }
        ];
        
        const sidebarItemTree = itemsTree && itemsTree.length > 0 ? itemsTree.map((item) => { 
            return (<SidebarItem key={ item.key } level={ item.level } title={ item.title } icon={ item.icon } href={ item.href } items={ item.items } /> ); 
        }) : [];
        
        return(
            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <SidebarSearchItem />
                        { sidebarItemTree }
                    </ul>
                </div>
            </div>
        );
    }
    
    componentWillMount(){

    }
    
    componentWillUnmount(){

    }
}