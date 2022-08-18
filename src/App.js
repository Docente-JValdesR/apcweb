import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginForm from "./components/loginForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginForm />} />
    </Routes>
  );
}
