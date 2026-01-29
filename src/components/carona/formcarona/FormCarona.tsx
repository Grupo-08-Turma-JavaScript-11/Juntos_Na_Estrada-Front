import {
  use,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import type Carona from "../../../models/Carona";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";
import ModalDeletarCarona from "../modaldeletarcarona/ModalDeletarCarona";
import type Usuario from "../../../models/Usuario";
import type Categoria from "../../../models/Categoria";

function FormCarona() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [carona, setCarona] = useState<Carona>({} as Carona);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  //const [localizacao, setLocalizacao] = useState<Localizacao>();

  //const { cep } = useParams<{ cep: string }>();

  async function buscarCaronasPorId(id: string) {
    setIsLoading(true);
    try {
      await buscar(`/caronas/${id}`, setCarona);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar a categoria.", "erro");
    }
    setIsLoading(false);
  }

  async function buscarUsuarioPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar o usuario.", "erro");
    }
  }

  async function buscarUsuarios() {
    try {
      await buscar(`/usuarios`, setUsuarios);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar os usuarios.", "erro");
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar a categoria.", "erro");
    }
  }

  async function buscarCategorias() {
    try {
      await buscar(`/categorias`, setCategorias);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar as categorias.", "erro");
    }
  }

  useEffect(() => {
    buscarUsuarios();
    buscarCategorias();
    if (id !== undefined) {
      buscarCaronasPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setCarona({
      ...carona,
      usuario: usuario,
    });
  }, [usuario]);

  useEffect(() => {
    setCarona({
      ...carona,
      categoria: categoria,
    });
  }, [categoria]);

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
        retornar();
      } catch (error: any) {
        ToastAlerta("Erro ao atualizar a Categoria.", "erro");
      }
    } else {
      try {
        console.log(carona);
        await cadastrar(`/caronas`, carona, setCarona);
        ToastAlerta("A Caronas foi cadastrado com sucesso!", "sucesso");
        retornar();
      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar a Caronas.", "erro");
      }
    }

    setIsLoading(false);
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Viagem" : "Editar Viagem"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCarona}>
        <div className="flex flex-col gap-2">
          <label htmlFor="enderecoOrigem">Origem da Viagem</label>
          <input
            type="text"
            placeholder="CEP(00000-000)"
            name="enderecoOrigem"
            className="border-2 border-slate-700 rounded p-2"
            value={carona.enderecoOrigem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="enderecoDestino">Destino da Viagem</label>
          <input
            type="text"
            placeholder="CEP(00000-000)"
            name="enderecoDestino"
            className="border-2 border-slate-700 rounded p-2"
            value={carona.enderecoDestino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="distancia">Distancia da Viagem</label>
          <input
            type="text"
            placeholder="Km"
            name="distancia"
            className="border-2 border-slate-700 rounded p-2"
            value={carona.distancia}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="velocidade">Velocidade da Via</label>
          <input
            type="text"
            placeholder="Km/h"
            name="velocidade"
            className="border-2 border-slate-700 rounded p-2"
            value={carona.velocidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="vagas">Vagas no veiculo</label>
          <input
            type="text"
            placeholder="Quantos assentos?"
            name="vagas"
            className="border-2 border-slate-700 rounded p-2"
            value={carona.vagas}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Motoristas</p>
          <select
            name="tema"
            id="tema"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um Usuario
            </option>

            {usuarios.map((usuario) => (
              <>
                <option value={usuario.id}>{usuario.nome}</option>
              </>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do veiculo</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma categoria
            </option>

            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.descricao}</option>
              </>
            ))}
          </select>
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
        {id === undefined ? "" : <ModalDeletarCarona />}
      </form>
    </div>
  );
}

export default FormCarona;
