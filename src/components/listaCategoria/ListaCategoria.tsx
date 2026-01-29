import { useEffect, useState } from "react";
import type Categoria from "../../models/categoria/Categoria";
import { buscar } from "../../service/Service";
import CardCategoria from "../categorias/cardCategoria/CardCategoria";

function ListaCategoria() {

  const [categorias, setCategoria] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategoria();
  }, [categorias]);

  async function buscarCategoria() {
    try {
      await buscar("/categorias", setCategoria);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        console.log("Categorias não encontradas");
      }
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-400 p-8">
    <div className="grid flex items-center justify-center w-full ">
      <div className="flex font-bold text-[30px] w-full items-center justify-center pb-4">
        <h1> Lista Categorias</h1>
      </div>
      <div className="container flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ListaCategoria;
