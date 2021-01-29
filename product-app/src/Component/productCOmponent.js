import React from "react";
import { connect } from "react-redux";
import "./productComponent.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { loadProducts, toggleProd } from "../Action/actions";

const ProductComponent = (props) => {
  const [value, setValue] = React.useState(2);
  const [categories, setcategories] = React.useState(() => null);

  let id = props.match.params.id;
  React.useEffect(() => {
    props.toggleProd(id);
  }, [props.prod]);
  // let categoriesTmp = null;
  React.useEffect(() => {
    try {
      let categoriesTmp = props.prod.categories.map((catObj) => {
        return catObj.name;
      });
      setcategories(() => categoriesTmp);
    } catch (e) {
      // console.log(e);
    }
  }, [props.prod]);
  React.useEffect(() => {
    if (props.products.length === 0) {
      props.loadProducts();
    }
  }, [props.products]);

  return (
    categories != null && (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h4>Product Component</h4>
        </div>
        <div className="panel-body">
          <div className="jumbotron">
            <div className="itemOne">
              <div className="row">
                <div className="col-sm-5">
                  <img className="Image-bg" src={props.prod.image} />
                </div>
                <div className="col-sm-6">
                  <div className="product_title ">
                    <b> Product Title :</b>
                    {props.prod.id}
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="description">
                    <b>Description :</b>
                    {props.prod.description}
                  </div>{" "}
                  <br></br>
                  <br></br>
                  <br></br> <br></br> <br></br>
                  <br></br>
                  <div className="price">
                    <b>price :</b>
                    {props.prod.price}
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="address-text">
                    <b> Rating :</b>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                  </div>
                  <div>Categories :- {categories.join(",")}</div>
                </div>
              </div>
              <hr />
              <hr />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { prod: state.prods.curProduct, products: state.prods.products };
};
// const mapDispatchToProps = (state) => {};

export default connect(mapStateToProps, { toggleProd, loadProducts })(
  ProductComponent
);
