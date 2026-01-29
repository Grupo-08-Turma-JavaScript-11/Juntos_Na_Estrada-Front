import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import type Carona from "../../../models/Carona";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";
import ModalDeletarCarona from "../modaldeletarcarona/ModalDeletarCarona";
import type Usuario from "../../../models/Usuario";
import type Categoria from "../../../models/Categoria";

import {
  MapPin,
  Navigation,
  Gauge,
  Users,
  User,
  Car
} from "lucide-react";

function FormCarona() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [carona, setCarona] = useState<Carona>({} as Carona);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarCaronasPorId(id: string) {
    setIsLoading(true);
    try {
      await buscar(`/caronas/${id}`, setCarona);
    } catch {
      ToastAlerta("Erro ao buscar a viagem.", "erro");
    }
    setIsLoading(false);
  }

  async function buscarUsuarios() {
    await buscar(`/usuarios`, setUsuarios);
  }

  async function buscarCategorias() {
    await buscar(`/categorias`, setCategorias);
  }

  async function buscarUsuarioPorId(id: string) {
    await buscar(`/usuarios/${id}`, setUsuario);
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    buscarUsuarios();
    buscarCategorias();
    if (id) buscarCaronasPorId(id);
  }, [id]);

  useEffect(() => {
    setCarona((prev) => ({ ...prev, usuario }));
  }, [usuario]);

  useEffect(() => {
    setCarona((prev) => ({ ...prev, categoria }));
  }, [categoria]);

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

    try {
      if (id) {
        await atualizar(`/caronas`, carona, setCarona);
        ToastAlerta("Viagem atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar(`/caronas`, carona, setCarona);
        ToastAlerta("Viagem cadastrada com sucesso!", "sucesso");
      }
      retornar();
    } catch {
      ToastAlerta("Erro ao salvar a viagem.", "erro");
    }

    setIsLoading(false);
  }

  const campos = [
    { label: "Origem (CEP)", name: "enderecoOrigem", icon: <MapPin size={18} /> },
    { label: "Destino (CEP)", name: "enderecoDestino", icon: <Navigation size={18} /> },
    { label: "Distância (Km)", name: "distancia", icon: <Gauge size={18} /> },
    { label: "Velocidade (Km/h)", name: "velocidade", icon: <Gauge size={18} /> },
    { label: "Vagas", name: "vagas", icon: <Users size={18} /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 font-sans overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />
      <div className="absolute inset-0 bg-black/10" />

      {/* BRILHOS */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[#1E3A8A]/10 blur-[140px]" />

      <div className="relative z-10 grid place-items-center w-full max-w-xl backdrop-blur-md">

        <form
          onSubmit={gerarNovaCarona}
          className="w-full rounded-3xl  p-10 flex flex-col gap-5"
        >
          <h1 className="text-4xl font-black text-[#1E3A8A] text-center mb-4">
            {id ? "Editar Viagem" : "Cadastrar Viagem"}
          </h1>

          {campos.map((field) => (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1E3A8A]">
                {field.label}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  {field.icon}
                </span>
                <input
                  type="text"
                  name={field.name}
                  value={(carona as any)[field.name] || ""}
                  onChange={atualizarEstado}
                  className="w-full pl-10 pr-3 py-3 border bg-white border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                />
              </div>
            </div>
          ))}

          {/* Motorista */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1E3A8A]">Motorista</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <User size={18} />
              </span>
              <select
                className="w-full pl-10 pr-3 py-3 border bg-white border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
                defaultValue=""
              >
                <option value="" disabled>Selecione um usuário</option>
                {usuarios.map((u) => (
                  <option key={u.id} value={u.id}>{u.nome}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Categoria */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1E3A8A]">Categoria do veículo</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Car size={18} />
              </span>
              <select
                className="w-full pl-10 pr-3 py-3 border bg-white border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                defaultValue=""
              >
                <option value="" disabled>Selecione uma categoria</option>
                {categorias.map((c) => (
                  <option key={c.id} value={c.id}>{c.descricao}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-4 mt-8 justify-center">
            <button
              type="button"
              onClick={retornar}
              className="w-1/2 py-3 rounded-full bg-slate-300 hover:bg-slate-400 font-bold transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="w-1/2 py-3 rounded-full bg-[#F37021] hover:bg-[#d65d18] text-white font-black flex justify-center items-center transition"
            >
              {isLoading ? <ClipLoader color="#fff" size={22} /> : id ? "Atualizar" : "Cadastrar"}
            </button>
          </div>

          {id && (
            <div className="flex justify-center mt-4">
              <ModalDeletarCarona />
            </div>
          )}

        </form>
      </div>
    </section>
  );
}

export default FormCarona;
