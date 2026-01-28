import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Juntos na Estrada</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>

        <li>
          <Link to="/categorias" className="hover:underline">
            Login
          </Link>
        </li>

        <li>
          <Link to="/produtos" className="hover:underline">
            Categorias
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
