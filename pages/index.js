import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import Dashboard from "../components/Dashboard";

class Index extends Component {
    render() {
        return (
            <div>
               <NavMenuDesktop/>
               <Dashboard/>
            </div>
        );
    }
}

export default Index;