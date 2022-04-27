import React from "react";
import { connect } from "react-redux";
import { buyCream } from "../redux";

function CreamContainer(props) {
  return (
    <div>
      <h1>Number of cream-{props.num}</h1>
      <button onClick={props.buyCream}>Buy cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    num: state.cream.numOfCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCream: () => {
      dispatch(buyCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreamContainer);
