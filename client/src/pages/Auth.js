import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_PAGE, REGISTRATION_PAGE} from "../utils/url";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {


    const location = useLocation()
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (location.pathname === LOGIN_PAGE) {
            setIsLogin(true)
            console.log(isLogin)
        }
    }, [location.pathname])

    return (
        <div>
            <Container
                style={{height: '100vh', width: '50%', margin: '100px auto'}}>
                <Card className="p-5">
                    <h2 className="m-auto">
                        {
                            isLogin ? "Authorization" : "Registration"
                        }
                    </h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Row>
                                <Button variant="outline-dark" type="submit">
                                    { isLogin? "Login" : "Registration"}
                                </Button>
                                {
                                    isLogin ?
                                        <div className="mt-4">
                                            <NavLink to={REGISTRATION_PAGE}>to registration</NavLink>
                                        </div>
                                        :
                                        <div className="mt-4">
                                            <NavLink to={LOGIN_PAGE}>to login</NavLink>
                                        </div>
                                }

                            </Row>
                        </Form.Group>

                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;