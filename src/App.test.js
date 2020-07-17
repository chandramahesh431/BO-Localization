import React from "react";
import { shallow } from "enzyme";

import App from "./App";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props}></App>);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, id) => {
  return wrapper.find(`[data-test="${id}"]`);
};

describe("App component render", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {});

  test("should render without error", () => {
    expect(wrapper).not.toBeUndefined();
  });

  test("should one button for English", () => {
    const bottonEnglishEle = findByTestAttr(wrapper, "btnEnglish");
    expect(bottonEnglishEle.length).toBe(1);
  });

  test("should one button for French", () => {
    const bottonFrenchEle = findByTestAttr(wrapper, "btnFrench");
    expect(bottonFrenchEle.length).toBe(1);
  });

  test("should one button for Chinese", () => {
    const bottonChinaEle = findByTestAttr(wrapper, "btnChina");
    expect(bottonChinaEle.length).toBe(1);
  });

  test("should one button for English button click", () => {
    const bottonEnglishEle = findByTestAttr(wrapper, "btnEnglish");
    bottonEnglishEle.simulate("click");
  });

  test("should one button for French button click", () => {
    const bottonFrenchEle = findByTestAttr(wrapper, "btnFrench");
    bottonFrenchEle.simulate("click");
  });
  test("should one button for China button click", () => {
    const bottonChinaEle = findByTestAttr(wrapper, "btnChina");
    bottonChinaEle.simulate("click");
  });
});
