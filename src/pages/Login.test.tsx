import { shallow } from "enzyme";
import { AuthProvider } from "../provider/AuthProvider";
import Login from "./Login";

test("renders login page without error", () => {
  const wrapper = shallow(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
  const loginPage = wrapper.find("[data-test='page-login']");
  expect(loginPage.length).toBe(1);
});
