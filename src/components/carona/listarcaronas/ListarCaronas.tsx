import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import type Carona from "../../../models/Carona";
import { SyncLoader } from "react-spinners";
import CardCarona from "../cardcarona/CardCarona";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListarCaronas() {
  const [caronas, setCaronas] = useState<Carona[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    buscarCaronas();
  }, []);

  async function buscarCaronas() {
    try {
      setIsLoading(true);
      await buscar("/caronas", setCaronas);
    } catch {
      ToastAlerta("Erro ao buscar as caronas", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 font-sans overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />
      <div className="absolute inset-0 bg-black/10" />

      {/* BRILHOS */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[#1E3A8A]/10 blur-[140px]" />

      {/* CONTAINER PRINCIPAL */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col space-between items-center py-16">

        {/* TÍTULO */}
        <div className="text-center max-w-2xl mb-14 px-4">
          <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-3">
            Minhas Viagens
          </h1>
          <p className="text-base md:text-lg text-[#1E3A8A]/80">
            Gerencie e acompanhe suas caronas em um só lugar 🚗
          </p>
        </div>

        {/* LOADING */}
        {isLoading && (
          <div className="flex flex-cols justify-center m-12">
            <SyncLoader color="#1E3A8A" size={16} />
          </div>
        )}

        {/* EMPTY STATE */}
        {!isLoading && caronas.length === 0 && (
          <div className="bg-white/80 backdrop-blur-md px-10 py-8 rounded-2xl shadow-xl">
            <p className="text-center text-lg font-semibold text-[#1E3A8A]/80">
              Nenhuma carona encontrada.
            </p>
          </div>
        )}

        {/* GRID DE CARDS */}
        {!isLoading && caronas.length > 0 && (
          <div className="w-full mt-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {caronas.map((carona) => (
                <CardCarona key={carona.id} carona={carona} />
              ))}
            </div>
          </div>
        )}

      </div>
      
    </section>
  );
}

export default ListarCaronas;

