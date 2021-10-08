import { shallow } from "enzyme";
import Login from "./Login";

test("renders login page without error", () => {
  const wrapper = shallow(<Login />);
  const loginPage = wrapper.find("[data-test='page-login']");
  expect(loginPage.length).toBe(1);
});
