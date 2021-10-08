import { shallow } from "enzyme";
import HeaderRight from "./HeaderRight";

test("renders header right component without error", () => {
  const wrapper = shallow(<HeaderRight />);
  const headerRightComponent = wrapper.find(
    "[data-test='component-header-right']"
  );
  expect(headerRightComponent.length).toBe(1);
});
