import React from "react";
import Header from "../components/common/Header/Header";
import "./layout.scss";

const Layout = (props) => {
    const { children } = props;
    return (
        <div className="layout-component">
            <header>
                <Header />
            </header>
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;