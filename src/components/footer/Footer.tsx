import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white w-full font-sans border-t border-white/20">

      <div className="max-w-full mx-auto sm:px-10 md:px-16 lg:px-20">

        {/* grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-b border-white/20 pb-12 place-items-center text-center">

          {/* bloco 1 */}
          <div className="space-y-3 max-w-xs flex flex-col items-center">
            <h2 className="text-2xl font-black tracking-tight text-[#F37021]">
              Juntos na Estrada
            </h2>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              Sua jornada começa com segurança e termina com satisfação.
            </p>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              O melhor serviço de transporte privado da região.
            </p>
          </div>

          {/* bloco 2 */}
          <div className="space-y-4 max-w-xs flex flex-col items-center">
            <h3 className="text-xl font-black tracking-tight text-[#F37021]">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm font-bold text-white">
              <Link to='/categorias'><li className="hover:text-[#F37021] transition-colors cursor-pointer">Categorias</li></Link>
              <li className="hover:text-[#F37021] transition-colors cursor-pointer">Minhas Viagens</li>
              <li className="hover:text-[#F37021] transition-colors cursor-pointer">Solicitar Viagem</li>
            </ul>
          </div>

          {/* bloco 3 */}
          <div className="space-y-4 max-w-xs flex flex-col items-center">
            <h3 className="text-xl font-black tracking-tight text-[#F37021]">
              Contato
            </h3>
            <div className="space-y-2 text-sm font-bold text-white">
              <p className="hover:text-[#F37021] transition-colors cursor-pointer">
                grupo8turmajavascript11@gmail.com
              </p>
              <p className="hover:text-[#F37021] transition-colors cursor-pointer">
                +55 11 95152-9987
              </p>
            </div>
          </div>

        </div>

        {/* copyright */}
        <div className="mt-10 flex justify-center">
          <p className="text-white/70 text-[11px] font-bold uppercase tracking-widest text-center">
            © 2026 Juntos na Estrada — Todos os Direitos Reservados
          </p>
        </div>

      </div>
    </footer>
  );
}
