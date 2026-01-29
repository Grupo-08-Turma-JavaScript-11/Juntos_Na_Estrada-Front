import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      className="
        w-full max-w-md
        bg-white/80 backdrop-blur-md
        border border-white/40
        rounded-2xl p-6
        flex items-center justify-between
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Lado esquerdo */}
      <div className="flex items-center gap-4">

        {/* Ícone */}
        <div
          className="
            w-12 h-12 rounded-full
            bg-[#F37021]/20 text-[#F37021]
            flex items-center justify-center
            text-xl font-bold
          "
        >
          🏷️
        </div>

        {/* Texto */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-[#1E3A8A]">
            {categoria.descricao}
          </h3>
          <span className="text-sm text-[#1E3A8A]/70">
            Categoria cadastrada
          </span>
        </div>

      </div>

      {/* Ações */}
      <div className="flex gap-2">

        <Link
          to={`/editarcategorias/${categoria.id}`}
          className="
            px-8 py-8 text-sm  w-full rounded-full
            bg-[#1E3A8A] text-white font-semibold
            hover:bg-[#162c63]
            transition
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategorias/${categoria.id}`}
          className="
            px-8 py-8 text-sm  w-full rounded-full
            bg-[#F37021] text-white font-semibold
            hover:bg-[#d65d18]
            transition-all hover:-translate-y-1 active:scale-95
          "
        >
          Deletar
        </Link>

      </div>
    </div>
  );
}

export default CardCategoria;
