import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="
      flex items-center justify-between
      h-24 px-8 md:px-20 py-10
      bg-[#1E3A8A] text-white
      sticky top-0 z-[100]
      font-sans shadow-lg
    ">

      {/* Lado esquerdo */}
      <div className="flex items-center gap-4">

        {/* Ícone */}
        <div className="bg-[#F37021] p-3 rounded-full text-2xl shadow-lg"></div>

        <Link to="/">
          <h2 className="text-4xl font-black tracking-tight">
            Juntos na Estrada
          </h2>
        </Link>

      </div>

      {/* Lado direito */}
      <div className="flex items-center justify-end gap-10">

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link to="/cadastrarcaronas">
              <button className="hover:text-[#F37021] transition-colors text-lg font-bold whitespace-nowrap">
                Cadastrar Viagem
              </button>
            </Link>
          </li>

          <li>
            <Link to="/caronas">
              <button className="hover:text-[#F37021] transition-colors text-lg font-bold whitespace-nowrap">
                Minhas Viagens
              </button>
            </Link>
          </li>
        </ul>

        {/* Botão Login */}
        <Link to="/login">
          <button
            className="
              rounded-full bg-[#F37021]
              px-8 py-4 min-w-[220px]
              text-xl font-black text-white
              shadow-lg hover:bg-[#d65d18]
              transition-all hover:-translate-y-1 active:scale-95
            "
          >
            Login
          </button>
        </Link>
      </div>

    </nav>
  );
}

