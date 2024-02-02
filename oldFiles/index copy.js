import React from "react";
import "./index.css";
import reportWebVitals from "../src/reportWebVitals";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import store from "../src/redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  console.log('Index', state)
  // debugger
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
      <BrowserRouter>
        <Provider store={store}>
          <App navbarPage={state.navbarPage}/>
          {/* <App state={state} dispatch={store.dispatch.bind(store)} /> */}
        </Provider>
      </BrowserRouter>
  );
};
rerenderEntireTree(store.getState());
//store.subscribe(rerenderEntireTree);
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
  // rerenderEntireTree(state);
});
// // когда очищу пропсы в навбаре то запустить код ниже!
// // rerenderEntireTree();
// // благодаря коннект нам не нужен сабскрайб отдельно вызывать, в коннекте все сабскрайбится и ниже код не нужен
// // store.subscribe(() => {
// //   rerenderEntireTree();
// // });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
