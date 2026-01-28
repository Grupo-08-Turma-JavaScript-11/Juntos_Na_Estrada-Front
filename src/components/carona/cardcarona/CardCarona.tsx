import type Carona from "../../../models/Carona";
import MapCard from "../../mapa/cardmapa/CardMapa";

interface CardCaronaProps {
  carona: Carona;
}
function CardCarona({ carona }: CardCaronaProps) {



  return (
    <>

    <div className="flex flex-col rounded-2xl w-100 h-90 bg-[#ffffff] shadow-xl">
        
      <MapCard />
    
        <div className="flex flex-col p-4">
          <div className="text-2xl font-bold   text-[#374151] pb-3">
            Wesley - Tesla premium
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
