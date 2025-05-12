import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-center gap-5 p-4 bg-slate-800">
      <Link className="text-slate-300 hover:underline" to="/">
        Home
      </Link>
      <Link className="text-slate-300 hover:underline" to="/about">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
