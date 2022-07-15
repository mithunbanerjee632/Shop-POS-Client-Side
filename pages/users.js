export async function getStaticProps(){
    const data = [
        {
            id: 1,
            fullname: 'Mithun Banerjee',
            username: 'Mithun',
            roll: 'admin',
            lastactivity: '12/07/2021',
        },
        {
            id: 2,
            fullname: 'Mithun Banerjee',
            username: 'Mithun',
            roll: 'admin',
            lastactivity: '12/07/2021',
        },
        {
            id: 3,
            fullname: 'Mithun Banerjee',
            username: 'Mithun',
            roll: 'admin',
            lastactivity: '12/07/2021',
        },
        {
            id: 4,
            fullname: 'Mithun Banerjee',
            username: 'Mithun',
            roll: 'admin',
            lastactivity: '12/07/2021',
        },

    ]


    return {
        props: {
            dataTable:data
        }
    }
}


import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import UserList from "../components/UserList";

class Users extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <UserList dataTable={this.props.dataTable}/>
            </div>
        );
    }
}

export default Users;