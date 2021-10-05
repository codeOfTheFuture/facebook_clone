import { shallow } from "enzyme";
import HeaderLogo from "./HeaderLogo";

test("renders header component without error", () => {
  const wrapper = shallow(<HeaderLogo />);
  const headerComponent = wrapper.find("[data-test='component-header-logo']");
  expect(headerComponent.length).toBe(1);
});
