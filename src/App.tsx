import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useUserProfile } from "./context/UserProfileContext";

const App: React.FC = () => {
  const { darkModeEnabled } = useUserProfile();

  return (
    <div className={`App ${darkModeEnabled && 'dark'}`} data-test='component-app'>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route path='/login' render={() => <Login />} />
      </Switch>
    </div>
  );
};

export default App;
