import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/privacy' render={() => <PrivacyPolicy />}
      </Switch>
    </div>
  );
};

export default App;
