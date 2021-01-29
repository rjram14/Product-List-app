import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { connect } from "react-redux";
import actions from "./Action/actions";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ProductLIst from "./Component/productlist";
import ProductComponent from "./Component/productCOmponent";

import "./index.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <div className="todo-app">
            <Header />
            <Route exact path="/" component={ProductLIst}></Route>
            <Route
              exact
              path="/productComponent/:id"
              component={ProductComponent}
            ></Route>
            <Footer />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
