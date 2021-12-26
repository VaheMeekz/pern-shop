import React from 'react';
import {Card, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

const BrandsBar = () => {

    const items = useSelector(state => state?.itemReducer.items)
    return (
        <Row className="d-flex">
                <Card>asd</Card>
            {
                items.map(brand => {
                    return <Card key={brand.id} className="p-3">{brand.name}</Card>
                })
            }
        </Row>
    );
};

export default BrandsBar;