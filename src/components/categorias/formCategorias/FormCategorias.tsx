import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategorias() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        alert("Categoria não encontrada!");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      }
      retornar();
    } catch {
      ToastAlerta("Erro ao salvar categoria!", "erro");
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 font-sans overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[#1E3A8A]/10 blur-[140px]" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl rounded-3xl px-10 py-12">

        <h1 className="text-3xl font-extrabold text-[#1E3A8A] text-center mb-8">
          {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>

        <form onSubmit={gerarNovaCategoria} className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label
              htmlFor="descricao"
              className="text-sm font-bold text-[#1E3A8A]"
            >
              Categoria
            </label>
            <input
              type="text"
              name="descricao"
              placeholder="Digite a descrição da categoria"
              className="
                w-full rounded-lg p-3
                border border-white/60
                bg-white/70 backdrop-blur
                focus:outline-none focus:ring-2 focus:ring-[#F37021]
                text-[#1E3A8A]
              "
              value={categoria.descricao || ""}
              onChange={atualizarEstado}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#F37021] hover:bg-[#d65d18] text-white font-black flex justify-center items-center transition"
            
          >
            {id === undefined ? "Cadastrar" : "Atualizar"}
          </button>

          <button
            type="button"
            onClick={retornar}
            className="
              text-sm font-bold text-[#1E3A8A]
              hover:underline mt-2
            "
          >
            Voltar para categorias
          </button>

        </form>
      </div>
    </section>
  );
}

export default FormCategorias;
