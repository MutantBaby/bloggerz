import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./store/auth.jsx";

//done

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
