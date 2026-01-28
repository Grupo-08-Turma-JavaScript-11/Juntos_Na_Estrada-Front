import type Carona from "../../../models/Carona";

interface CardCaronaProps {
  carona: Carona;
}

function CardCarona({ carona }: CardCaronaProps) {
  return (
    <>
      <div className="flex flex-col rounded-2xl w-[500px] bg-[#ffffff] shadow-xl">
        <figure className="flex justify-center items-center rounded-2xl">
          <img
            src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
            alt="Card Preview"
            className="rounded-t-2xl"
          />
        </figure>

        <div className="flex flex-col p-8">
          <div className="text-2xl font-bold   text-[#374151] pb-6">
            Wesley - Tesla premium
          </div>
          <div className=" text-lg   text-[#374151]">
            <p>Vagas disponiveis: {carona.vagas} </p>
            <p>Destino: {carona.enderecoDestino}</p>
          </div>
          <div className="flex justify-end pt-6">
            <button className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
              Mais detalhes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCarona;
