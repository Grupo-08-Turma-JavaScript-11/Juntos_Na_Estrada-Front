import { useEffect, useState } from "react";
import CardCategoria from "../cardCategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Service";
import { Link } from "react-router-dom";

function ListaCategoria() {
  const [categorias, setCategoria] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategoria();
  }, []);

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
    <div className="relative min-h-screen flex items-center justify-center px-6 font-sans overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />
      <div className="absolute inset-0 bg-black/10" />

      {/* BRILHOS */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[#1E3A8A]/10 blur-[140px]" />

      {/* CARD CONTAINER */}
      <div className="w-full max-w-6xl grid items-center backdrop-blur-md rounded-3xl p-8 sm:p-12">

        {/* TÍTULO */}
        <h1 className="text-4xl font-black text-[#1E3A8A] text-center ">
          Lista de Categorias
        </h1>

        {/* GRID DE CARDS */}
        <div className="flex justify-center gap-10
            mb-12 px-8 py-12">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>

        {/* VAZIO */}
        {categorias.length === 0 && (
          <p className="text-center text-[#1E3A8A]/70 mt-10 font-medium">
            Nenhuma categoria cadastrada.
          </p>
        )}
      </div>
        
    
      </div>
      

  );
}

export default ListaCategoria;
