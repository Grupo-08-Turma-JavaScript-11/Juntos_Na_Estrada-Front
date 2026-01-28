import { useEffect, useState, type ChangeEvent , type FormEvent} from "react";
import type Localizacao from "../../../models/Localizacao";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import type Carona from "../../../models/Carona";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";

function FormCarona() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [carona, setCarona] = useState<Carona>({} as Carona);

  const { id } = useParams<{ id: string }>();

  //const [localizacao, setLocalizacao] = useState<Localizacao>();

  //const { cep } = useParams<{ cep: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/caronas/${id}`, setCarona);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar a categoria.", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  /*async function buscarCep(cep: string) {
        try {
            setIsLoading(true);
            const resposta = await buscar(cep, setLocalizacao);

        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
    if (cep !== undefined) {
      buscarCep(cep);
    }
  }, [cep]);*/

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCarona({
      ...carona,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/caronas");
  }

  async function gerarNovaCarona(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/caronas`, carona, setCarona);
        ToastAlerta("A Caronas foi atualizado com sucesso!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao atualizar a Categoria.", "erro");
      }
    } else {
      try {
        await cadastrar(`/caronas`, carona, setCarona);
        ToastAlerta("A Caronas foi cadastrado com sucesso!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar a Caronas.", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCarona}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Qual o nome da sua Categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={carona.enderecoDestino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui sua Categoria"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={carona.enderecoDestino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCarona;
