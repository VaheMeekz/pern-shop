import React from 'react';
import {authRoutes, publicRoutes} from "../../utils/routes";
import {NavLink, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LOGIN_PAGE, SHOP_PAGE} from "../../utils/url";

const Header = () => {

    const router = useHistory()

    const isAuth = useSelector(state => state?.authReducer.isAuth)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="d-flex justify-content-center align-items-center"
                    >
                    <Navbar.Brand onClick={() => router.push(SHOP_PAGE)}>PERN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {isAuth ? <>
                                    <Nav.Link>Admin</Nav.Link>
                                    <Nav.Link>Login</Nav.Link></>

                                :<>
                                    <Nav.Link onClick={()=>router.push(LOGIN_PAGE)}>Autorization</Nav.Link>
                                </>
                            })
                            }
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Meekz</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;