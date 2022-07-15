import React, {Component,Fragment} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class Dashboard extends Component {
    constructor() {
        super();
        this.state={
            TotalTransaction:"100",
            TotalIncome:"100",
            TotalCategory:"100",
            TotalProduct:"100"
        }
    }
    render() {
        const data = [
            {
               id:1, receipt_no:'1111',
                     receipt_date: '11/11/2022',
                     qty :'12',
                     total:'1200'
            },
            {
                id:1, receipt_no:'1111',
                receipt_date: '11/11/2022',
                qty :'12',
                total:'1200'
            },
            {
                id:1, receipt_no:'1111',
                receipt_date: '11/11/2022',
                qty :'12',
                total:'1200'
            },
            {
                id:1, receipt_no:'1111',
                receipt_date: '11/11/2022',
                qty :'12',
                total:'1200'
            },
            {
                id:1, receipt_no:'1111',
                receipt_date: '11/11/2022',
                qty :'12',
                total:'1200'
            },
            {
                id:1, receipt_no:'1111',
                receipt_date: '11/11/2022',
                qty :'12',
                total:'1200'
            },
            {
                id:1, receipt_no:'1111',
                receipt_date: '11/11/2022',
                qty :'12',
                total:'1200'
            },
        ];

        const columns = [
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
        ]

        const dataChart=[
            {
                name: '22/11/2022',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: '22/11/2022',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: '22/11/2022',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: '22/11/2022',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: '22/11/2022',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: '22/11/2022',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: '22/11/2022',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            },
        ]
        return (
            <Fragment>
                <Container>
                    <Row className="mt-2">
                        <Col md={6} lg={6} sm={12}>
                            <Row>
                                <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                                    <Card>
                                        <Card.Body>
                                            <h1 className="count-number">{this.state.TotalTransaction}</h1>
                                            <h6 className="count-title">Total Transaction</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                                    <Card>
                                        <Card.Body>
                                            <h1 className="count-number">{this.state.TotalIncome}</h1>
                                            <h6 className="count-title">Total Income</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                                    <Card>
                                        <Card.Body>
                                            <h1 className="count-number">{this.state.TotalCategory}</h1>
                                            <h6 className="count-title">Total Category</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="text-center animated zoomIn p-1" sm={6} xs={6} md={6} lg={6}>
                                    <Card>
                                        <Card.Body>
                                            <h1 className="count-number">{this.state.TotalProduct}</h1>
                                            <h6 className="count-title">Total Product</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>


                                <Col className="p-1 animated zoomIn" sm={12} xs={12} md={12} lg={12}>
                                    <Card>
                                        <Card.Body>
                                            <h1 className="count-title">Last 7 Days</h1>
                                            <ResponsiveContainer width="100%" height={200}>
                                                <AreaChart  data={dataChart}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#CB4D85" fill="#CB4D85" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Col>

                        <Col className="p-1 animated zoomIn" sm={12} xs={12} md={6} lg={6}>
                            <Card>
                                <Card.Body>
                                    <DataTable
                                        paginationPerPage={6}
                                        pagination={true}
                                        title="Recent Transaction"
                                        columns={columns}
                                        data={data}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Dashboard;