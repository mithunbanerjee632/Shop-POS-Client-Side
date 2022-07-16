import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ReportList from "../components/ReportList";

class Report extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ReportList/>
            </div>
        );
    }
}

export default Report;