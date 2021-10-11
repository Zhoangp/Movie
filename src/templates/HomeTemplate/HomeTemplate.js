import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => { // props => path, exact, Component

    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute) => {
            return <Fragment>
                <Header />
                <Component {...propsRoute}/>
                <h1>Footer</h1>

            </Fragment>
    }}/>
}