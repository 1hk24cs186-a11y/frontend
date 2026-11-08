import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./layout.css";
import ProtectedRoute from "./components/ProtectedRoute";
import ComingSoon from "./components/comingsoon";
import PublicLayout from "./layout/publiclayout";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<ComingSoon title="Courses" />} />
        <Route path="/learning-path" element={<ComingSoon title="Learning Path" />} />
        <Route path="/progress" element={<ComingSoon title="Progress" />} />
        <Route path="/ai-tutor" element={<ComingSoon title="AI Tutor" />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;