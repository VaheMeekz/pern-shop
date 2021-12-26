import React, {useState} from 'react';
import {Card, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

const BrandsBar = () => {

    const items = useSelector(state => state?.itemReducer.items)
    const [checked, setChecked] = useState(1)

    const check = (id) => {
        setChecked(id)
    }

    return (
        <Row className="d-flex">
            <Card>asd</Card>
            {
                items.map(brand => {
                    return <Card key={brand.id} className="p-3"
                                 style={{cursor:"pointer"}}
                                 onClick={() => check(brand.id)}
                                 border={brand.id === checked ? "danger" : "dark"}
                    >{brand.name}</Card>
                })
            }
        </Row>
    );
};

export default BrandsBar;