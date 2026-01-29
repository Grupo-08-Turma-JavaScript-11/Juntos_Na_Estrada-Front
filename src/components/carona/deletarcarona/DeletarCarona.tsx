import { useNavigate, useParams } from "react-router-dom";
import type Carona from "../../../models/Carona";
import { useEffect, useState } from "react";
import { deletar, buscar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";
import MapCard from "../../mapa/cardmapa/CardMapa";

function DeletarCarona() {
  //const navigate = useNavigate();

  const [carona, setCarona] = useState<Carona>({} as Carona);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/caronas/${id}`, setCarona);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar o categoria.", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCarona() {
    setIsLoading(true);

    try {
      await deletar(`/caronas/${id}`);
      ToastAlerta("Carona deletada com sucesso", "sucesso");
      //retornar(); // só volta se deu certo
    } catch (error: any) {
      ToastAlerta("Erro ao deletar a Carona.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  /*function retornar() {
    navigate("/caronas");
  }*/

  return (
    <div className="container w-1/2 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar viagem</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a viagem a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="flex flex-col rounded-2xl h-100 bg-[#ffffff] shadow-xl">
          <MapCard />
        </header>
        <p className="p-8 text-3xl b h-full">Origem: {carona.enderecoOrigem}</p>
        <p className="p-8 text-3xl h-full">Destino: {carona.enderecoDestino}</p>
        <div className="flex">
          <button
            type="button"
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarCarona}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>

          <button
            type="button"
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCarona;
