import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="
      bg-white border rounded-xl p-4
      flex items-center justify-between
      shadow-sm hover:shadow-md
      transition duration-200
    ">

      {/* Lado esquerdo */}
      <div className="flex items-center gap-4">

        {/* Ícone */}
        <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700
                        flex items-center justify-center text-xl font-bold">
          🏷️
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {categoria.descricao}
          </h3>
          <p className="text-sm text-gray-500">
            Categoria cadastrada
          </p>
        </div>

      </div>

      {/* Ações */}
      <div className="flex gap-2">

        <Link
          to={`/editarcategorias/${categoria.id}`}
          className="px-3 py-1.5 text-sm rounded-lg bg-sky-600 text-white
            hover:bg-sky-700 transition">
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="px-3 py-1.5 text-sm rounded-lg bg-red-500 text-white            
            hover:bg-red-600 transition">
          Excluir
        </Link>

      </div>
    </div>
  );
}

export default CardCategoria;