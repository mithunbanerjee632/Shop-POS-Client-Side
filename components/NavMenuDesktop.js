import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

class NavMenuDesktop extends Component {
    render() {
        return (
            <Navbar className="nav-bar sticky-top" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="nav-logo" src="/navlogo.svg" alt="navlogo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-center">
                              <Link activeClassName="d-none" href="/">
                                  <div className="nav-item-div">
                                       < i className="fa fa-home mx-1"/>Dashboard
                                  </div>
                              </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center">
                                <Link href="/users">
                                    <div className="nav-item-div">
                                        < i className="fa fa-user-alt mx-1"/>Users
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center">
                                <Link href="/category">
                                    <div className="nav-item-div">
                                        < i className="fa fa-list-ul mx-1"/>Category
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center">
                                <Link href="/product">
                                    <div className="nav-item-div">
                                        < i className="fa fa-shopping-bag mx-1"/>Product
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center">
                                <Link href="/transaction">
                                    <div className="nav-item-div">
                                        < i className="fa fa-money-bill mx-1"/>Transaction
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center">
                                <Link href="/report">
                                    <div className="nav-item-div">
                                        < i className="fa fa-file-invoice mx-1"/>Report
                                    </div>
                                </Link>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavMenuDesktop;