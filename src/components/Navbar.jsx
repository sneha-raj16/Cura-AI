import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">

      <div className="flex items-center justify-between px-10 py-5">

        <h1 className="text-2xl font-bold text-white">
          CURA-AI
        </h1>

        <div className="flex items-center gap-8">

          <Link to="/" className="text-white hover:text-cyan-300">
            Home
          </Link>

          <Link to="/dashboard" className="text-white hover:text-cyan-300">
            Dashboard
          </Link>

          <Link to="/symptoms" className="text-white hover:text-cyan-300">
            Symptoms
          </Link>

          <Link to="/medicines" className="text-white hover:text-cyan-300">
            Medicines
          </Link>

          <Link to="/reports" className="text-white hover:text-cyan-300">
            Reports
          </Link>

          <Link to="/voice" className="text-white hover:text-cyan-300">
            Voice
          </Link>

          <Link to="/profile" className="text-white hover:text-cyan-300">
            Profile
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;