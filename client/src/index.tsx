import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/login";
import Main from "./components/App/main";
import Overviews from "./components/App/Container/overviews/overview";
import Container from "./components/App/Container/container";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App></App>}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}>
            <Route path="container" element={<Container />}>
              <Route path="overview" element={<Overviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
