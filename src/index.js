import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as Prov, LOCALES } from "../src/locale/injex";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
const configureStore = store();
const defaultLanguage = "en-us";
// const localizeInfo = useSelector(
//   (state) => state.localizationReducer.localizationInfo
// );

ReactDOM.render(
  // <Prov locale={defaultLanguage}>
  <Provider store={configureStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  // </Prov>,
  document.getElementById("root")
);
