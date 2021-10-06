import { shallow } from "enzyme";
import HeaderIcon from "./HeaderIcon";

test("renders header icon component without error", () => {
  const wrapper = shallow(<HeaderIcon Icon={""} />);
  const headerIconComponent = wrapper.find(
    "[data-test='component-header-icon']"
  );
  expect(headerIconComponent.length).toBe(1);
});
