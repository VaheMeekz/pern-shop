import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../utils/routes";
import {SHOP_PAGE} from "../../utils/url";

const AppRoutes = () => {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <div>
            <Switch>
                { isAuth ? authRoutes.map(({id, name, component, path}) => {
                        return <Route
                            key={id}
                            component={component}
                            path={path}
                            name={name}
                            exact
                        />
                    })
                    : publicRoutes.map(({id, name, component, path}) => {
                        return <Route
                            key={id}
                            component={component}
                            path={path}
                            name={name}
                            exact
                        />
                    })
                }
                    <Redirect to={SHOP_PAGE}/>
            </Switch>
        </div>
    );
};

export default AppRoutes;