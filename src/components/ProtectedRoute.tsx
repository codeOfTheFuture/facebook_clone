import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = (props: any) => {
  const { component: Component, ...rest } = props;

  const { user } = useAuth();
  console.log(user);

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    />
  );
};
