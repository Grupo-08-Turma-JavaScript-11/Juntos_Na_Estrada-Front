import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../service/Service";
import type Categoria from "../../../models/Categoria";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      alert("Categoria não encontrada!");
    }
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria deletada com sucesso!");
      retornar();
    } catch {
      alert("Erro ao deletar categoria.");
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />

      {/* CARD */}
      <div
        className="
          relative z-10 w-full max-w-xl
          bg-white/80 backdrop-blur-md
          border border-white/40
          rounded-3xl shadow-2xl
          p-8 flex flex-col gap-6
        "
      >
        <h1 className="text-4xl font-extrabold text-center text-[#1E3A8A]">
          Deletar Categoria
        </h1>

        <p className="text-center text-[#1E3A8A]/80 font-medium">
          Você tem certeza que deseja deletar esta categoria?
        </p>

        {/* INFO */}
        <div className="bg-white/70 rounded-xl p-6 text-center shadow">
          <span className="text-2xl font-bold text-[#1E3A8A]">
            🏷️ {categoria.descricao}
          </span>
        </div>

        {/* BOTÕES */}

        

        <div className="flex gap-4 mt-4">

            <button
                onClick={deletarCategoria}
                className="
                flex-1 rounded-full bg-[#F37021]
                py-3 text-white font-black text-lg
                shadow-lg hover:bg-[#d65d18]
                transition-all hover:-translate-y-1 active:scale-95
            "
          >
            Sim, deletar
          </button>

          <button
            onClick={retornar}
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

export default DeletarCategoria;
