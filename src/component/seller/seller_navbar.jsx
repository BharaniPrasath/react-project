import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/seller/seller_navbar.css";
import axios from "axios";

function SellerNavbar({ hideStartSelling, hidelogin }) {

    const [isSellerAuthenticated, setIsSellerAuthenticated] = useState(
        localStorage.getItem("isSellerAuthenticated") === "true")

    const sellerLogout = async () => {
        try {
            await axios.post("http://localhost:8000/seller_logout/", {}, { withCredentials: true }); // call Django logout
        } catch (err) {
            console.error("Logout failed", err);
        }
        localStorage.removeItem('isSellerAuthenticated')
        localStorage.removeItem('seller')
        setIsSellerAuthenticated(false)
        window.location.href = "/seller";
    }

    // ✅ Keep state in sync with localStorage (in case of login elsewhere)
    useEffect(() => {
        const checkAuth = () => {
            setIsSellerAuthenticated(localStorage.getItem("isSellerAuthenticated") === "true");
        };
        window.addEventListener("storage", checkAuth);
        return () => {
            window.removeEventListener("storage", checkAuth);
        };
    }, []);


    return (
        <Navbar expand="lg" bg="white" className="shadow-sm">
            <Container fluid className="container-nav">
                <div className="d-flex align-items-center">
                    <Navbar.Brand as={Link} to="/">Shopshy</Navbar.Brand>
                    {!isSellerAuthenticated?
                    <Navbar.Brand as={Link} to="/seller">Seller Hub</Navbar.Brand>:
                    <Navbar.Brand as={Link} to="/addproduct">Seller Hub</Navbar.Brand>}
                </div>

                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/sell">Sell Online</Nav.Link>
                        <Nav.Link as={Link} to="/fees">Fees & Commission</Nav.Link>
                        <Nav.Link as={Link} to="/grow">Grow</Nav.Link>
                        <Nav.Link as={Link} to="/learn">Learn</Nav.Link>

                        {!isSellerAuthenticated ? (
                            <>
                                {!hidelogin && (
                                    <Nav.Link as={Link} to="/seller_login">
                                        Login
                                    </Nav.Link>
                                )}

                                {!hideStartSelling && (
                                    <Nav.Link as={Link} to="/seller_information">
                                        Start Selling
                                    </Nav.Link>
                                )}
                            </>
                        ) : (
                            <Nav.Link as={Link}>
                                <button name="seller_logout" onClick={sellerLogout}>
                                    Logout
                                </button>
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SellerNavbar;
