import { shallow } from "enzyme";
import HeaderLeft from "./HeaderLeft";

test("renders header left component without error", () => {
  const wrapper = shallow(<HeaderLeft />);
  const headerLeftComponent = wrapper.find(
    "[data-test='component-header-left']"
  );
  expect(headerLeftComponent.length).toBe(1);
});
