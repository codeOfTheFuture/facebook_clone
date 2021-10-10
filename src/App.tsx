import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className='App' data-test='component-app'>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/login' render={() => <Login />} />
      </Switch>
    </div>
  );
};

export default App;
