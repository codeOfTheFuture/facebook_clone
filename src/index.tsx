import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./provider/AuthProvider";
import { ThemeProvider } from "./provider/ThemeProvider";
import { UserProfileProvider } from "./provider/UserProfileProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProfileProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProfileProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
