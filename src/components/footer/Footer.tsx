export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-24 pb-12 font-sans border-t border-white/5">
      
      <div className="w-full pl-8 md:pl-20 pr-0">
        
        {/* grid principal */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-white/10 pb-16">
          
          {/* juntos na estrada */}
          <div className="space-y-1 text-left">
            <h2 className="text-2xl font-black tracking-tighter text-[#F37021]">
              Juntos na Estrada
            </h2>
            <p className="text-white/70 text-sm leading-relaxed font-medium">
              Sua jornada começa com segurança e termina com satisfação.
            <ul>O melhor serviço de transporte privado da região.</ul>
            </p>
          </div>
          {/* links rápidos */}
          <div className="space-y-2 md:text-center">
            <h3 className="text-2xl font-black tracking-tighter text-[#F37021]">
            Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm text-white/30font-medium">
              <li className="hover:text-[#F37021] cursor-pointer transition-colors">Cadastro</li>
              <li className="hover:text-[#F37021] cursor-pointer transition-colors">Minhas Viagens</li>
              <li className="hover:text-[#F37021] cursor-pointer transition-colors">Solicitar Viagem</li>
            </ul>
          </div>

          {/* contato */}
          <div className="space-y-2 text-right pr-0">
            <h3 className="text-2xl font-black tracking-tighter text-[#F37021]">
              Contato
            </h3>
            <div className="text-sm text-white/50 space-y-2 font-medium pr-8 md:pr-20">
              <p className="hover:text-[#F37021] transition-colors cursor-pointer">
              grupo8turmajavascript11@gmail.com 
              <ul>+55 11 95152-9987</ul>
              </p>
            </div>
          </div>
        </div>

        {/* --- direitos autorais --- */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 text-white/30 text-[10px] font-black uppercase tracking-[2px] w-full md:ml-[-5rem] lg:ml-[-10rem] pr-8 md:pr-20">
          <p className="text-center">
            © 2026 Juntos na Estrada — Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}