import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import counter from "./reducers";
import "./index.css";

const middleware = [thunk];

// This line instantiates our central Redux store.
// The `createStore` function receives the reducer
// that is responsible for updating the store, along
// with any initial state that we may want the store
// to start out with (which is none in this case).
const store = createStore(
  counter,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also
// where the store "lives".
ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Counter />
    </div>
  </Provider>,
  document.getElementById("root")
);
