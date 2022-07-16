import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";

class ReportList extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            showEdit:false,
            deleteID:"",
            editID:""
        }
    }

    handleClose=()=>{
        this.setState({show:false})
    }

    handleOpen=()=>{
        this.setState({show:true})
    }

    handleCloseEdit=()=>{
        this.setState({showEdit:false})
    }

    handleOpenEdit=()=>{
        this.setState({showEdit:true})
    }

    deleteIconOnClick=(id)=>{
        alert(id);
    }

    editIconOnClick=(id)=>{
        this.handleOpenEdit();
        this.setState({editID:id});
    }

    render() {

        const data = [
            {
                id: 1,
                invoice_no:"1201",
                invoice_date:"12/07/22",
                product_name: 'Laptop',
                product_category:'Laptop',
                product_code: 'laptop110',
                quantity:"10",
                product_icon: 'laptop.svg',
                unit_price:'50,000',
                total_price:"500000",
                discount_price:"500",
                seller_name:'Mithun'

            },
            {
                id: 2,
                invoice_no:"1201",
                invoice_date:"12/07/22",
                product_name: 'Laptop',
                product_category:'Laptop',
                product_code: 'laptop110',
                quantity:"10",
                product_icon: 'laptop.svg',
                unit_price:'50,000',
                total_price:"500000",
                discount_price:"500",
                seller_name:'Mithun'
            },
            {
                id: 3,
                invoice_no:"1201",
                invoice_date:"12/07/22",
                product_name: 'Laptop',
                product_category:'Laptop',
                product_code: 'laptop110',
                quantity:"10",
                product_icon: 'laptop.svg',
                unit_price:'50,000',
                total_price:"500000",
                discount_price:"500",
                seller_name:'Mithun'
            },
            {
                id: 4,
                invoice_no:"1201",
                invoice_date:"12/07/22",
                product_name: 'Laptop',
                product_category:'Laptop',
                product_code: 'laptop110',
                quantity:"10",
                product_icon: 'laptop.svg',
                unit_price:'50,000',
                total_price:"500000",
                discount_price:"500",
                seller_name:'Mithun'
            },

        ]



        const columns = [
            {
                name: 'Invoice No',
                selector: 'invoice_no',
                sortable: true,
                cell: row => <img src={row.product_icon}  className="cat-icon"/>

            },
            {
                name: 'Invoice Date',
                selector: 'invoice_date',
                sortable: true,

            },
            {
                name: 'Product Name',
                selector: 'product_name',
                sortable: true,
            },

            {
                name: 'Quantity',
                selector: 'quantity',
                sortable: true,
            },

            {
                name: 'Total Price',
                selector: 'total_price',
                sortable: true,
            },


            {
                name: 'Seller Name',
                selector: 'seller_name',
                sortable: true,
            },
            {
                name: 'Invoice',
                selector: 'id',
                sortable: true,
                cell: row => <button   className="btn btn-danger">Print Invoice</button>
            },

        ];

        return (
            <Fragment>
                <Container className="animated zoomIn">

                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row className="mt-2">
                                            <Col md={6}>
                                                <div className="input-group">
                                                    <h4 className="table-title mr-2">Report</h4>

                                                    <input type="date" className="form-control mx-2"/>
                                                    <input type="date" className="form-control mx-2"/>
                                                    <button   className="btn btn-danger mx-2">Print Invoice</button>
                                                </div>
                                            </Col>

                                        </Row>
                                    </Container>
                                    <hr className="bg-secondary"/>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col sm={12} xs={12} md={12} lg={12}>
                                                <DataTable
                                                    noHeader={true}
                                                    paginationPerPage={5}
                                                    pagination={true}
                                                    columns={columns}
                                                    data={data}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default ReportList;
