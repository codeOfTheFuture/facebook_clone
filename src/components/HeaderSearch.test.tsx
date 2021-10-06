import { shallow } from "enzyme";
import HeaderSearch from "./HeaderSearch";

test("renders header search component without error", () => {
  const wrapper = shallow(<HeaderSearch />);
  const headerSearchComponent = wrapper.find(
    "[data-test='component-header-search']"
  );
  expect(headerSearchComponent.length).toBe(1);
});
