import { shallow } from "enzyme";
import Header from "./Header";

test("renders header component without error", () => {
  const wrapper = shallow(<Header />);
  const headerComponent = wrapper.find("[data-test='component-header']");
  expect(headerComponent.length).toBe(1);
});
