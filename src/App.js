import { Routes, Route } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import MyNavbar from "./components/Navbar";

// pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListPage from "./components/List";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<h2>home</h2>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
