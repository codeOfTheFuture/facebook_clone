import { shallow } from "enzyme";
import HeaderInput from "./HeaderInput";

test("renders header input component without error", () => {
  const wrapper = shallow(<HeaderInput />);
  const headerInputComponent = wrapper.find(
    "[data-test='component-header-input']"
  );
  expect(headerInputComponent.length).toBe(1);
});
