import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { useLocation, useNavigate, Navigate } from "react-router-dom";
// import { ENV } from "../config/config";

const Layout1 = (props) => {

    const { children } = props;
    // const location = useLocation();
    // const pathName = location.pathname;


    // if (!_id && (pathName !== "/" && pathName !== "/communities" && pathName !== "/proposals" && pathName !== "/proposal-vote" && pathName !== "/create-proposal" && pathName !== "/member-request/:slug/:address")) {
    //     console.log("Please connect your wallet first")
    //     return <Navigate to="/" />
    // }

    return (
        <div className="main-wrapper">
            <Header />
            <Container fluid>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
export default Layout1;