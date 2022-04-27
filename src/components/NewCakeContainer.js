import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
// console.log(React);
// console.log(connect);
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  // console.log(NewCakeContainer);
  // console.log(props);
  return (
    <div>
      <h1>number of cakes-{props.numOfCakes}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          props.buycake(number);
        }}
      >
        buy{number} cake
      </button>
    </div>
  );
}
//state from redux store is mapped to our component props.
//apart from props cakecontainer was recieving it will now recive additional props called numOfCakes
const mapStateToProps = (state) => {
  return {
    //numofcakkes he props ahe je apan pass karat aho container la
    //one state property that we are acessing.
    numOfCakes: state.cake.numOfCakes,
  };
};
//mapdispatch to props will basically map our dispatch of an actioncretaorto a prop in our component.
const mapDispatchToProps = (dispatch) => {
  return {
    buycake: (number) => {
      dispatch(buyCake(number));
    },
  };
};
//connect function connects react component to the redux store.in our case it connects newcakecontainer to redux store.
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
