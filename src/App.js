import React, { useState } from "react";
import "./App.css";
import { Provider, LOCALES } from "../src/locale/injex";
import Main from "./components/main";
import { FormattedMessage } from "react-intl";
import Test from "../src/components/test";
import Localization from "../src/components/HOC/localization/Localization";
import HeaderLocale from "../src/components/headerLocale";
import { useDispatch, useSelector } from "react-redux";

function App(props) {
  const localizeInfo = useSelector(
    (state) => state.localizationReducer.localizationInfo
  );
  const dispatch = useDispatch();
  return (
    <Provider locale={localizeInfo.currentLanguage}>
      <div className="container">
        <p>
          Store Value:{" "}
          <span
            style={{
              background: "yellow",
              padding: "4px",
              border: "1px solid black",
              width: "100px",
              margin: "10px",
            }}
          >
            {localizeInfo.currentLanguage}
          </span>
        </p>
        <HeaderLocale></HeaderLocale>
        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
