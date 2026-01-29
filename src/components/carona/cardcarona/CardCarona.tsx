import { PencilSimpleIcon } from "@phosphor-icons/react";
import type Carona from "../../../models/Carona";
import MapCard from "../../mapa/cardmapa/CardMapa";
import { Link } from "react-router-dom";

interface CardCaronaProps {
  carona: Carona;
}

function CardCarona({ carona }: CardCaronaProps) {
  return (
    <div
      className="
        w-full max-w-sm
        flex flex-col overflow-hidden
        rounded-3xl
        bg-white/80 backdrop-blur-md
        border border-white/40
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      {/* MAPA */}
      <div className="h-48 w-full">
        <MapCard />
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-col gap-4 p-5">

        {/* TÍTULO + EDITAR */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-extrabold text-[#1E3A8A] truncate">
            {carona.usuario.nome.substring(0, 12)} • {carona.categoria.descricao}
          </h3>

          <Link
            to={`/editarcaronas/${carona.id}`}
            className="text-[#1E3A8A] hover:text-[#F37021] transition"
            title="Editar carona"
          >
            <PencilSimpleIcon size={22} />
          </Link>
        </div>

        {/* INFORMAÇÕES */}
        <div className="text-sm text-[#1E3A8A]/80 space-y-1">
          <p><strong>Destino:</strong> {carona.enderecoDestino}</p>
          <p><strong>Vagas:</strong> {carona.vagas}</p>
          <p><strong>Tempo:</strong> {carona.tempo}</p>
        </div>

        {/* BOTÃO */}
        <div className="pt-4 flex justify-center">
          <button
            className="
              rounded-full bg-[#F37021]
              px-6 py-2
              text-white font-black text-sm
              shadow-lg
              hover:bg-[#d65d18]
              transition-all
              hover:-translate-y-0.5 active:scale-95
            "
          >
            Mais detalhes
          </button>
        </div>

      </div>
    </div>
  );
}

export default CardCarona;
