import { Link } from "react-router-dom";

function Navbar() {
  return (
              <div className="relative w-full h-[230px] overflow-hidden sky-transition">
                <div className="container flex items-center justify-between text-lg mx-8 m-3 text-white">
                    <Link to="/home" className="text-3xl font-bold">Juntos Na Estrada</Link>

                    <div className="flex gap-4 font-semi-bold">
                        <Link to="/" className="hover:underline">Viagens</Link>
                        <Link to="/" className="hover:underline">Suas Viagem</Link>
                        <Link to="/categorias" className="hover:underline">Categorias</Link>
                        <Link to="/" className="hover:underline">Perfil</Link>
                        <Link to='' className="hover:underline">Sair</Link>
                    </div>
                </div>

                    {/* Sol */}
                    <div className="sun"></div>

                    {/* Lua */}
                    <div className="moon"></div>

                    {/*Estrelas */}
                    <div className="absolute inset-0 stars"></div>

                    {/* Estrada */}
                    <div className="absolute bottom-0 w-[200%] h-[80px] road animate-road">
                        <div className="absolute top-1/2 w-full h-[3px] dashed-line opacity-60"></div>
                    </div>

                    {/* Kombi */}
                    <div className="absolute bottom-[50px] animate-drive-right">
                        <img
                            src="/img/kombi.png"
                            alt="Kombi"
                            className="w-[160px] select-none pointer-events-none scale-x1 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)]"
                        />
                    </div>
                </div>
  );
}
export default Navbar