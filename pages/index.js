export async function getStaticProps(){
    const dataChart=[
        {
            t_date: '22/11/2022',
            income: 4000,

        },
        {
            t_date: '22/11/2022',
            income: 3000,

        },
        {
            t_date: '22/11/2022',
            income: 2000,

        },
        {
            t_date: '22/11/2022',
            income: 2780,

        },
        {
            t_date: '22/11/2022',
            income: 1890,

        },
        {
            t_date: '22/11/2022',
            income: 2390,

        },
        {
            t_date: '22/11/2022',
            income: 3490,

        },
    ];

    const dataTable = [
        {
            id:1,
            receipt_no:'1111',
            receipt_date: '11/11/2022',
            qty :'12',
            total:'1200'
        },
        {
            id:1,
            receipt_no:'1111',
            receipt_date: '11/11/2022',
            qty :'12',
            total:'1200'
        },
        {
            id:1,
            receipt_no:'1111',
            receipt_date: '11/11/2022',
            qty :'12',
            total:'1200'
        },
        {
            id:1,
            receipt_no:'1111',
            receipt_date: '11/11/2022',
            qty :'12',
            total:'1200'
        },
        {
            id:1,
            receipt_no:'1111',
            receipt_date: '11/11/2022',
            qty :'12',
            total:'1200'
        },
        {
            id:1,
            receipt_no:'1111',
            receipt_date: '11/11/2022',
            qty :'12',
            total:'1200'
        },
        {
            id:1,
            receipt_no:'1111',
            receipt_date: '11/11/2022',
            qty :'12',
            total:'1200'
        },
    ];

    const dataTableColumns = [
        {
            name:'receipt',
            selector:'receipt_no',
            sortable:true
        },
        {
            name:'date',
            selector:'receipt_date',
            sortable:true
        },

        {
            name:'qty',
            selector:'qty',
            sortable:true
        },
        {
            name:'total',
            selector:'total',
            sortable:true
        },
    ];



    return {
        props: {
            dataTableColumns:dataTableColumns,
            dataTable:dataTable,
            TotalTransaction:"200",
            TotalIncome:"400",
            TotalCategory:"600",
            TotalProduct:"900",
            dataChart:dataChart
        }
    }
}



import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import Dashboard from "../components/Dashboard";

class Index extends Component {
    render() {
        return (
            <div>
               <NavMenuDesktop/>
               <Dashboard
                   dataTableColumns={this.props.dataTableColumns}
                   dataTable={this.props.dataTable}
                   dataChart={this.props.dataChart}
                   TotalTransaction={this.props.TotalTransaction}
                   TotalIncome={this.props.TotalIncome}
                   TotalCategory={this.props.TotalCategory}
                   TotalProduct={this.props.TotalProduct}
               />
            </div>
        );
    }
}

export default Index;