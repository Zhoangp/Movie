import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer"
import BackToTop from "./Layout/BackToTop/BackToTop";

export const HomeTemplate = (props) => { // props => path, exact, Component

    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute) => {
            return <Fragment>
                <Header />
                <div style={{marginTop: "130px"}}>
                <BackToTop/>
                <Component {...propsRoute}/>
                </div>
                <Footer/>

            </Fragment>
    }}/>
}