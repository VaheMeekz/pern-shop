import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Drower from "../components/drower/Drower";
import {useSelector} from "react-redux";
import BrandsBar from "../components/brands/brandsBar";

const Shop = () => {

    return (
        <div>
            <Container>
                <Row className="mt-4">
                <Col md={3}>
                    <Drower/>
                </Col>
                <Col md={9}>
                    <BrandsBar/>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;