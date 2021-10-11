import { shallow } from "enzyme";
import { AuthProvider } from "../provider/AuthProvider";
import HeaderRight from "./HeaderRight";

test("renders header right component without error", () => {
  const wrapper = shallow(
    <AuthProvider>
      <HeaderRight />
    </AuthProvider>
  );
  const headerRightComponent = wrapper.find(
    "[data-test='component-header-right']"
  );
  expect(headerRightComponent.length).toBe(1);
});
