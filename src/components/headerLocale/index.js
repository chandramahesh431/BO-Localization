import React, { useState } from "react";
import { Provider, LOCALES } from "../../../src/locale/injex";
import { useDispatch, useSelector } from "react-redux";
import Test from "../../components/test";

const HeaderLocale = () => {
  const [language, setLanguage] = useState(LOCALES.english);
  const localizeInfo = useSelector(
    (state) => state.localizationReducer.localizationInfo
  );
  const dispatch = useDispatch();

  const changeLanguage = (lang) => {
    dispatch({ type: "LOCALIZE_INFO", payload: { currentLangauge: lang } });
  };
  const _language = localizeInfo.currentLanguage;
  return (
    <div className="row ">
      <div
        id="header"
        className="col"
        style={{
          background: "#DCDCDC",
          height: "100px",
          textAlign: "center",
          verticalAlign: "center",
        }}
      >
        <h4>BATCH ORCHESTRATOR</h4>
        {/* <Test id="WhoWeAre"></Test> */}
        <div id="lang">
          <button
            data-test="btnEnglish"
            style={
              "en-us" === _language
                ? {
                    background: "blue",
                    color: "white",
                  }
                : {}
            }
            onClick={() => {
              changeLanguage(LOCALES.english);
            }}
          >
            English
          </button>
          <button
            data-test="btnFrench"
            style={
              "fr-be" === _language
                ? {
                    background: "blue",
                    color: "white",
                  }
                : {}
            }
            onClick={() => {
              changeLanguage(LOCALES.french);
            }}
          >
            French
          </button>
          <button
            data-test="btnChina"
            style={
              "zh-tw" === _language
                ? { background: "blue", color: "white" }
                : {}
            }
            onClick={() => {
              changeLanguage(LOCALES.china);
            }}
          >
            Chinese
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLocale;
