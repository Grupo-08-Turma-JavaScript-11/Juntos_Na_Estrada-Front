import { PencilSimpleIcon } from "@phosphor-icons/react";
import type Carona from "../../../models/Carona";
import MapCard from "../../mapa/cardmapa/CardMapa";
import { Link } from "react-router-dom";


interface CardCaronaProps {
  carona: Carona;
}
function CardCarona({ carona }: CardCaronaProps) {



  return (
    <>

    <div className="flex flex-col rounded-2xl w-100 h-90 bg-[#ffffff] shadow-xl">
        
      <MapCard />
    
        <div className="flex flex-col p-4">
          <div className="text-2xl font-bold flex justify-between text-[#374151] pb-3">
            <span>{carona.usuario.nome.substring(0, 12)} - {carona.categoria.descricao}</span>
            <Link to={`/editarcaronas/${carona.id}`}><PencilSimpleIcon size={20} /></Link>
            
          </div>
          <div className=" text-lg   text-[#374151]">
            <p>Destino: {carona.enderecoDestino}</p>
            <p>Vagas disponiveis: {carona.vagas} </p>
            
          </div>
          <div className="flex justify-center pt-5">
            <button className="bg-[#7e22ce] text-[#ffffff] w-32  font-bold text-base  p-2 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
              Mais detalhes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCarona;
