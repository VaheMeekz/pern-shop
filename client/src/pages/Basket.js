import React from 'react';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import {FormControl, InputGroup,Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Basket = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Row>
                <div className="d-flex justify-content-center align-items-center m-5">
                    <h2>
                        Basket
                    </h2>
                </div>
                <Row className="d-flex justify-content-center align-items-center m-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <h2>
                            Your Items
                        </h2>
                    </div>
                    <Card className="d-flex justify-content-center align-items-center">
                        Items
                    </Card>
                </Row>
                <Card className="p-5 m-5">
                    <Form.Select aria-label="Default select example">
                        <option>Select delivert country</option>
                        <option value="1">Armenia</option>
                        <option value="2">UK</option>
                        <option value="3">Russia</option>
                        <option value="3">Canada</option>
                        <option value="3">Italia</option>
                    </Form.Select>
                    <div className="m-3">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="email"
                                aria-label="email"
                                aria-describedby="email"
                                type="email"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Add my Email
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Button variant="outline-primary">Order</Button>
                    </div>
                </Card>
            </Row>
        </div>
    );
};

export default Basket;
