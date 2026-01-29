import { useNavigate, useParams } from "react-router-dom";
import type Carona from "../../../models/Carona";
import { useEffect, useState } from "react";
import { deletar, buscar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";
import MapCard from "../../mapa/cardmapa/CardMapa";

function DeletarCarona({ onClose }: { onClose?: () => void }) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [carona, setCarona] = useState<Carona>({} as Carona);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/caronas/${id}`, setCarona);
    } catch {
      ToastAlerta("Erro ao buscar a carona.", "erro");
    }
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function deletarCarona() {
    setIsLoading(true);
    try {
      await deletar(`/caronas/${id}`);
      ToastAlerta("Carona deletada com sucesso", "sucesso");
      retornar();
    } catch {
      ToastAlerta("Erro ao deletar a carona.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/caronas");
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />

      {/* CARD */}
      <div
        className="
          relative z-10 w-full max-w-2xl
          bg-white/80 backdrop-blur-md
          border border-white/40
          rounded-3xl shadow-2xl
          p-8 flex flex-col gap-6
        "
      >
        <h1 className="text-4xl font-extrabold text-center text-[#1E3A8A]">
          Deletar viagem
        </h1>

        <p className="text-center text-[#1E3A8A]/80 font-medium">
          Você tem certeza que deseja apagar esta viagem?
        </p>

        {/* MAPA */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-64">
          <MapCard />
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-2 text-lg text-[#1E3A8A] font-semibold">
          <span>📍 Origem: {carona.enderecoOrigem}</span>
          <span>🏁 Destino: {carona.enderecoDestino}</span>
        </div>

        {/* BOTÕES */}
        <div className="flex gap-4 mt-4">

          <button
            type="button"
            onClick={deletarCarona}
            disabled={isLoading}
            className="
              flex-1 rounded-full bg-[#F37021]
              py-3 text-white font-black text-lg
              shadow-lg hover:bg-[#d65d18]
              transition-all hover:-translate-y-1 active:scale-95
              flex items-center justify-center
            "
          >
            {isLoading ? <ClipLoader color="#ffffff" size={22} /> : "Sim, deletar"}
          </button>

          <button
            type="button"
            onClick={() => onClose ? onClose() : retornar()}
            className="
              flex-1 rounded-full bg-[#1E3A8A]
              py-3 text-white font-black text-lg
              shadow-lg hover:bg-[#162c63]
              transition-all hover:-translate-y-1 active:scale-95
            "
          >
            Cancelar
          </button>

        </div>
      </div>
    </section>
  );
}

export default DeletarCarona;
