import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import TransactionList from "../components/TransactionList";

class Transaction extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <TransactionList/>
            </div>
        );
    }
}

export default Transaction;