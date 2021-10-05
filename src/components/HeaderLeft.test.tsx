import { shallow } from "enzyme";
import HeaderLeft from "./HeaderLeft";

test("renders header left component without error", () => {
  const wrapper = shallow(<HeaderLeft />);
  const headerComponent = wrapper.find("[data-test='component-header-left']");
  expect(headerComponent.length).toBe(1);
});
