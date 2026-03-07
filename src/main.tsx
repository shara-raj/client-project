import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import "./styles/dashboard-theme.css";
import { supabase } from "./services/supabase/supabaseClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
async function testConnection() {
  const { data, error } = await supabase.from("users").select("*").limit(1);

  console.log("Supabase Test:", data, error);
}

testConnection();
