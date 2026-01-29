export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 md:px-20 py-8 bg-[#1E3A8A] text-white sticky top-0 z-[100] font-sans shadow-lg">
      
      {/* lado esquerdo: logo padrao */}
      <div className="flex items-center gap-3">
        {/* icone com a cor Coral do projeto */}
        <div className="bg-[#F37021] p-600 rounded-600xl text-2xl shadow-lg">
        </div>
                <h2 className="text-3xl font-black">
          Juntos na Estrada
        </h2>
      </div>

      {/* lado direito: links e botao*/}
      <div className="flex items-center justify-end gap-10 flex-1">

        {/* links para acesso a outras paginas */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <button className="hover:text-[#F37021] transition-colors text-base font-bold tracking-tight whitespace-nowrap">
              Solicitar Viagem
            </button>
          </li>
          <li>
            <button className="hover:text-[#F37021] transition-colors text-base font-bold tracking-tight whitespace-nowrap">
              Minhas Viagens
            </button>
          </li>
        </ul>

        {/* botao cadastrar */}

           {/* botao solicitar viagem */}
            <button 
              className="
                rounded-full bg-[#F37021] 
                px-3 py-3 min-w-[300px]
                text-xl font-black text-white 
                shadow-1x2 hover:bg-[#d65d18] 
                transition-all hover:-translate-y-1 active:scale-95
              "
            >
                
           Login
            </button>
         
    
        
        </div>

   
    </nav>
  );
}

