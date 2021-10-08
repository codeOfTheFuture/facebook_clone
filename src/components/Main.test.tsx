import { shallow } from "enzyme";
import Main from "./Main";

test("renders main component without error", () => {
  const wrapper = shallow(<Main />);
  const mainComponent = wrapper.find("[data-test='component-main']");
  expect(mainComponent.length).toBe(1);
});
