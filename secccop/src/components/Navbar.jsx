import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
  const active = "bg-blue-600 text-white shadow-lg";
  const inactive = "text-gray-700 hover:bg-yellow-100 hover:text-yellow-800";

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-800">SECCOP</span>
              <span className="text-xs text-gray-500 -mt-1">Centro de Capacitación</span>
            </div>
          </Link>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/cursos"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Cursos
            </NavLink>
            <NavLink
              to="/cronograma"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Cronograma
            </NavLink>
            <NavLink
              to="/asesoria"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Asesoría
            </NavLink>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/cursos"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Cursos
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/cronograma"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Cronograma
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/asesoria"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Asesoría
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
