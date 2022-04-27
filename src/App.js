import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
// import CakeContainer from "./components/CakeContainer";
// import HookCakeContainer from "./components/HookCakeContainer";
// import CreamContainer from "./components/CreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    //it provide the store to all component in application across the tree.
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HookCakeContainer />
        <CreamContainer />
      <NewCakeContainer praj={"prajwal"} /> */}
      </div>
    </Provider>
  );
}

export default App;
