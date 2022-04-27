import React from "react";
import { connect } from "react-redux";
import { buyCake, buyCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item-{props.item} </h2>
      <button onClick={props.dispatch}>buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log("prajwal" + ownProps.cake);
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.cream.numOfCream;
  // console.log(itemState);
  return {
    item: itemState,
  };
};
//ownprops cake hoga to buycake dispatch hoga varna buycream dispatch hoga
//same with mapstatetoprops
const mapDispatchToProps = (dispatch, ownProps) => {
  const itemdispatch = ownProps.cake
    ? () => {
        dispatch(buyCake());
      }
    : () => {
        dispatch(buyCream());
      };
  return {
    dispatch: itemdispatch,
  };
};
console.log("pra");
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
