import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: "🏠" },
  { to: "/courses", label: "Courses", icon: "📚" },
  { to: "/learning-path", label: "Learning Path", icon: "🧭" },
  { to: "/progress", label: "Progress", icon: "📈" },
  { to: "/ai-tutor", label: "AI Tutor", icon: "🤖" },
  { to: "/profile", label: "Profile", icon: "👤" },
];

export default function AppLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-brand">Statskill</div>
        <nav className="sidebar-nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}
            >
              <span>{l.icon}</span> {l.label}
            </NavLink>
          ))}
        </nav>
        <button className="side-link logout" onClick={handleLogout}>
          <span>🚪</span> Logout
        </button>
      </aside>

      <div className="app-main">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
          <div className="topbar-user">
            <div className="avatar">{user?.full_name?.charAt(0).toUpperCase()}</div>
            <span>{user?.full_name}</span>
          </div>
        </header>
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}