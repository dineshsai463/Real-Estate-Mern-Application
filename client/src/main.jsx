import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-cbr06m21xmhulurf.us.auth0.com"
    clientId="7i8eoPNKz0yZY0NHD7btVNv9OmX8PlxH"
    authorizationParams={{
     redirect_uri: "https://localhsot:5173"
     
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
