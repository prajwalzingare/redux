import React from "react";
import { useSelector, useDispatch } from "react-redux"; //import
import { buyCake } from "../redux";
function HookCakeContainer() {
  //it is the hook that react redux librery provides.It is close equivalent to mapstatetoprops function which shows the state of component.to get hold to any state that we maintain in redux store.
  const numOfCakes = useSelector((state) => state.cake.numOfCakes); //this hook eceept the function as parameter.
  const dispatch = useDispatch(); //usedispatch function
  return (
    <div>
      <h1>Num of cakes-{numOfCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default HookCakeContainer;
