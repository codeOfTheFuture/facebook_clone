import { shallow } from "enzyme";
import Home from "./Home";

test("renders home page without error", () => {
  const wrapper = shallow(<Home />);
  const homePage = wrapper.find("[data-test='page-home']");
  expect(homePage.length).toBe(1);
});
