export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center justify-center px-8 md:px-20 font-sans">
      
      {/* PLANO DE FUNDO: degradê das telas */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />

      {/* efeitos de brilho */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/20 blur-[100px]" />
      <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#1E3A8A]/10 blur-[100px]" />

      {/* container central: o meio da pagina que divide o texto principal */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        
        {/* primeiro texto*/}
        <div className="flex flex-col space-y-8 text-center lg:text-left max-w-2xl">
          <p className="tracking-[0.25em] text-[10px] md:text-xs font-black text-[#1E3A8A] opacity-80 uppercase">
            ✨ VIAJE COM CONFORTO E SEGURANÇA
          </p>

          <h1 className="font-extrabold leading-[0.95] text-5xl md:text-7xl text-[#1E3A8A] tracking-tighter">
            Sua viagem <br />
            <span className="block italic text-white drop-shadow-sm">começa aqui!</span>
          </h1>

          <p className="text-lg md:text-xl text-[#1E3A8A]/80 font-medium leading-relaxed">
            Solicite um carro para sua viagem de forma rápida e fácil. <br className="hidden md:block" />
            Motoristas qualificados para você chegar ao seu destino com tranquilidade.<br />
          </p>

          
          <div className="flex justify-center lg:justify-start">
           {/* botao solicitar viagem */}
            <button 
              className="
                rounded-full bg-[#F37021] 
                px-20 py-6 min-w-[300px]
                text-xl font-black text-white 
                shadow-2xl hover:bg-[#d65d18] 
                transition-all hover:-translate-y-1 active:scale-95
              "
            >
                
            Cadastrar
            </button>
          </div>
        </div>

        {/* card viagem em andamento */}
        <div className="w-full max-w-[400px]">
          <div className="bg-white/90 backdrop-blur-md p-10 rounded-[40px] shadow-2xl border border-white/20 flex flex-col items-center text-center">
            
            <div className="flex items-center justify-center gap-3 mb-10 text-[#F37021]">
              <div className="w-3 h-3 bg-[#F37021] rounded-full animate-ping" />
              <span className="text-[11px] font-black uppercase tracking-[2px]">
                Viagem em andamento
              </span>
            </div>

            {/* origem e destino */}
            <div className="relative w-full space-y-12">
              <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 border-l-2 border-dashed border-gray-200" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-8 h-8 bg-[#1E3A8A] rounded-full border-4 border-white shadow-md mb-2" />
                <p className="text-xs font-bold text-gray-400 uppercase">Origem</p>
                <p className="text-lg font-black text-[#1E3A8A]">São Paulo, SP</p>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-8 h-8 bg-[#F37021] rounded-full border-4 border-white shadow-md mb-2" />
                <p className="text-xs font-bold text-gray-400 uppercase">Destino</p>
                <p className="text-lg font-black text-[#1E3A8A]">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* transicao da onda prox ao footer */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}