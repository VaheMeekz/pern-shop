import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {getOneItem} from "../redux/actions/item.action";
import Button from "react-bootstrap/Button";

const DeviceItem = ({device}) => {
    const check = useSelector(state => state?.itemReducer.checkId)
    const history = useHistory()
    const dispatch = useDispatch()

    const setId = (id) => {
        dispatch(getOneItem(id))
    }

    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
                <div><Button onClick={()=>setId(device.id)}>More</Button></div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
