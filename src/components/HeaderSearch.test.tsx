import { shallow } from "enzyme";
import HeaderSearch from "./HeaderSearch";

test("renders header search component without error", () => {
  const wrapper = shallow(<HeaderSearch />);
  const headerComponent = wrapper.find("[data-test='component-header-search']");
  expect(headerComponent.length).toBe(1);
});
