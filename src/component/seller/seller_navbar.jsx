import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/seller/seller_navbar.css";

function SellerNavbar({ hideStartSelling,hidelogin }) {
    return (
        <Navbar expand="lg" bg="white" className="shadow-sm">
            <Container fluid className="container-nav">
                <div className="d-flex align-items-center">
                    <Navbar.Brand as={Link} to="/">Shopshy</Navbar.Brand>
                    <Navbar.Brand as={Link} to="/seller">Seller Hub</Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/sell">Sell Online</Nav.Link>
                        <Nav.Link as={Link} to="/fees">Fees & Commission</Nav.Link>
                        <Nav.Link as={Link} to="/grow">Grow</Nav.Link>
                        <Nav.Link as={Link} to="/learn">Learn</Nav.Link>
                        {!hidelogin && (
                        <Nav.Link as={Link} to={'/seller_login'}>Login</Nav.Link>)}

                        {!hideStartSelling && (
                        <Nav.Link as={Link} to={'/seller_information'} >Start Selling</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SellerNavbar;
