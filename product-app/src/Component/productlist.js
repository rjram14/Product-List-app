import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
// var axios = require("axios");
import { loadProducts } from "../Action/actions";
import "./productlist.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const ProductLIst = ({ products, loadProducts }) => {
  const [value, setValue] = React.useState(2);
  React.useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <h4>Product List</h4>
      </div>
      <div className="panel-body">
        {products.map((prod) => {
          return (
            <div className="jumbotron" key={prod.id}>
              <div className="item">
                <div className="row">
                  <div className="col-sm-5">
                    <img className="Image" src={prod.image} />
                  </div>
                  <div className="col-sm-6">
                    <div className="product_title ">
                      <Link to={`/productComponent/${prod.id}`}>
                        {prod.name}
                      </Link>
                    </div>
                    <br></br>
                    <div className="description">
                      Description :{prod.description}
                    </div>{" "}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="price">price :{prod.price}</div>
                    <br></br>
                    <br></br>
                    <div className="address-text">
                      Rating :
                      <span>
                        {" "}
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </span>
                    </div>
                    <br></br>
                    <br></br>
                    <Link to={`/productComponent/${prod.id}`}>
                      <button type="button" className="btn btn-primary btn-sm">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
                <hr />
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const prodList = state.prods.products;
  return { products: prodList };
};

const mapDispatchToProps = (state) => {};

export default connect(mapStateToProps, { loadProducts })(ProductLIst);
