import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Button {...props}></Button>);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, id) => {
  return wrapper.find(`[data-test="${id}"]`);
};

describe("button component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("render without error", () => {
    expect(wrapper).not.toBeUndefined();
  });
  test("click event", () => {
    const mockClick = jest.fn();
    wrapper.setProps("btnClick", mockClick);
    expect(mockClick.mock.calls.length).toBe(1);
  });
});
