import { shallow } from "enzyme";
import HeaderInput from "./HeaderInput";

test("renders header input component without error", () => {
  const wrapper = shallow(<HeaderInput />);
  const headerComponent = wrapper.find("[data-test='component-header-input']");
  expect(headerComponent.length).toBe(1);
});
