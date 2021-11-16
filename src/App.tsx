import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`App ${darkMode && 'dark'}`} data-test='component-app'>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/login' render={() => <Login />} />
      </Switch>
    </div>
  );
};

export default App;
