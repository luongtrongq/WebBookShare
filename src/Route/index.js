import Home from "../HomeTemplate"
import SignUp from "../SignInPage/SignUp"
import SignIn from "../SignInPage/SignIn"
import SaleBook from "../SaleBookPage"
import { Route } from "react-router"

const route = [
    {
        exact: true,
        path: "/",
        component: Home,
    },
    {
        exact: false,
        path: "/signup",
        component: SignUp,
    }, {
        exact: false,
        path: "/signin",
        component: SignIn,
    }, {
        exact: false,
        path: "/salebook",
        component: SaleBook,
    },
]


export function renderRoute() {
    return route.map((item, index) => {
        return <Route key={index} exact={item.exact} path={item.path} component={item.component} />
    })
}

