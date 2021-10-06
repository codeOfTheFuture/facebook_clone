import { shallow } from "enzyme";
import HeaderLogo from "./HeaderLogo";

test("renders header logo component without error", () => {
  const wrapper = shallow(<HeaderLogo />);
  const headerLogoComponent = wrapper.find(
    "[data-test='component-header-logo']"
  );
  expect(headerLogoComponent.length).toBe(1);
});
