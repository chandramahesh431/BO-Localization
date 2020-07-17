import React from "react";
import { FormattedMessage } from "react-intl";
import { Provider, LOCALES } from "../../../../src/locale/injex";
import { useDispatch, useSelector } from "react-redux";

const RenderText = (id) => {
  return (
    // <Provider locale={LOCALES.china}>
    <FormattedMessage id={id}></FormattedMessage>
    // </Provider>
  );
};

const Localization = (WrappedComponent) => {
  // const Wrapper = (props) => {
  //   return WrappedComponent({ ...props, localizeText: RenderText });
  // };
  // return Wrapper;

  // return (props) => {
  //   return WrappedComponent({ ...props, localizeText: RenderText });
  // };

  return class extends React.Component {
    render() {
      return WrappedComponent({ ...this.props, localizeText: RenderText });
    }
  };
};

export default Localization;
