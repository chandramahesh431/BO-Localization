import React from "react";
import Localization from "../HOC/localization/Localization";

const Test = (props) => {
  return <h6>{props.localizeText(`${props.id}`)}</h6>;
};

export default Localization(Test);
