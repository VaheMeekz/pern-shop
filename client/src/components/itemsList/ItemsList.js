import React from 'react';
import {useSelector} from "react-redux";
import {Row} from "react-bootstrap";
import Item from "../item/Item";

const ItemsList = () => {

    const items = useSelector(state => state?.itemReducer.items)


    return (
        <Row className="d-flex">
            {
                items.map((i=>{
                    return <Item key ={i.id} item={i}/>
                }))
            }
        </Row>
    );
};

export default ItemsList;