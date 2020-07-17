import React from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import Localization from "../HOC/localization/Localization";

const Main = (props) => {
  return (
    <div id="Content" className="row" style={{ minHeight: "440px" }}>
      <div
        className="col-xl-10 col-lg-10 col-md-10 col-sm-12"
        style={{
          background: "#708090",
          alignContent: "center",
          paddingLeft: "50px",
        }}
      >
        <div
          className="row"
          style={{ padding: "5px", minHeight: "350px", width: "100%" }}
        >
          <div
            id="content1"
            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <h5>
              {props.localizeText("WhoWeAre")}
              {/* <FormattedMessage id="WhoWeAre"></FormattedMessage> */}
            </h5>
            {props.localizeText("WhoWeAreDesc")}
            {/* <FormattedMessage id="WhoWeAreDesc"></FormattedMessage> */}
          </div>
          <div
            id="content2"
            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <h5>
              {/* <FormattedMessage id="OurValuesandBeliefs"></FormattedMessage> */}
              {props.localizeText("OurValuesandBeliefs")}
            </h5>
            {props.localizeText("OurValuesandBeliefsDesc")}
            {/* <FormattedMessage id="OurValuesandBeliefsDesc"></FormattedMessage> */}
          </div>
          <div
            id="content3"
            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <h5>
              {props.localizeText("WhatWeDo")}
              {/* <FormattedMessage id="WhatWeDo"></FormattedMessage> */}
            </h5>
            {props.localizeText("WhatWeDoDesc")}
            {/* <FormattedMessage id="WhatWeDoDesc"></FormattedMessage> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localization(Main);
