import React from "react";
import { connect } from "react-redux"; //to connect the function.
import { buyCake } from "../redux"; //we can acess it by two way ohk.
//what we have to do hear is that we have to show number of cakes i.e redux state
//and dispatch the action to all the component.
function CakeContainer(props) {
  //props is standard name otherwise we can write anything hear to recive argument from connect function.
  return (
    <div>
      <h1>Number of cakes-{props.num}</h1>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}
//it gets redux state as parameter and returns an object
const mapStateToProps = (state) => {
  // console.log(state.cake.numOfCakes);
  // console.log(pro)
  //yaha pe state mili apneko jo apan ne cakereducer me define ki thi initialstate me
  //state is inbuild in react redux it is property.
  return {
    //num is like props who holds the state of component
    //to get the state we have to write state.cake.numofcakes insted of state.numofcakes.
    num: state.cake.numOfCakes,
  };
};

//it dispatch the actio.
//it takes redux dispatch method as parameterand returns and object.
const mapDispatchToProps = (dispatch) => {
  return {
    //disaptch the action creator from redux.
    //buycake is action creator hear.
    //key i.e buycake is props.
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
//we have to connect this two function to react component i.e cakecontainer.
//connect kelyanantar he dogh props mhanun pass hoin cakecontainer function madhi ani to props mahanun recive karan as parameter.
//connect is inbuld property in react redux.
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
