import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import type Carona from "../../../models/Carona";
import { SyncLoader } from "react-spinners";
import CardCarona from "../cardcarona/CardCarona";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListarCaronas() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [caronas, setCaronas] = useState<Carona[]>([]);

  useEffect(() => {
    buscarCaronas();
  }, [caronas.length]);

  async function buscarCaronas() {
    try {
      setIsLoading(true);
      await buscar("/caronas", setCaronas);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar as Caronas", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && caronas.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Carona foi encontrada!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {caronas.map((carona) => (
              <CardCarona key={carona.id} carona={carona} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCaronas;
