import {ADMIN_PAGE, BASKET_PAGE, ITEM_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, SHOP_PAGE} from "./url";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop";
import ItemPage from "../pages/ItemPage";
import Auth from "../pages/Auth";

export const authRoutes = [
    {id: 1, component: Admin, name: 'Admin', path: ADMIN_PAGE},
    {id: 2, component: Basket, name: 'Basket', path: BASKET_PAGE},
]

export const publicRoutes = [
    {id: 1, component: Shop, name: 'Shop', path: SHOP_PAGE},
    {id: 2, component: Auth, name: 'Login', path: LOGIN_PAGE},
    {id: 3, component: Auth, name: 'Registration', path: REGISTRATION_PAGE},
    {id: 4, component: ItemPage, name: 'Item', path: ITEM_PAGE + '/:id'},
]