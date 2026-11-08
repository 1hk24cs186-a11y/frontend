import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const { user } = useAuth();

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <Link to="/" className="brand">Statskill</Link>

          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            {user ? (
              <Link to="/profile" className="nav-btn">{user.full_name}</Link>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-btn">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </main>
    </>
  );
}

export default App;