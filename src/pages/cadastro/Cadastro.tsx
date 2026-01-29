import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { User, Image, Lock, Users } from "lucide-react";

import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  const senhaValida = usuario.senha?.length >= 8;
  const senhaConfere = usuario.senha === confirmarSenha;

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (senhaValida && senhaConfere) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(`/usuarios`, usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
        retornar();
      } catch {
        ToastAlerta("Erro ao cadastrar o usuário!", "erro");
      }
      setIsLoading(false);
    } else {
      ToastAlerta("Verifique as senhas.", "erro");
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 font-sans overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />
      <div className="absolute inset-0 bg-black/10" />

      {/* BRILHOS */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[#1E3A8A]/10 blur-[140px]" />

      <div className="relative z-10 grid place-items-center w-1/2 max-w-xl backdrop-blur-md overflow-hidden p-15">

        <form
          onSubmit={cadastrarNovoUsuario}
          className="flex flex-col gap-6 w-2/3 max-w-md mt-4 mb-6"
        >
          <h2 className="text-4xl font-black text-[#1E3A8A] text-center mt-4 mb-6">
            Criar conta
          </h2>

          {/* Campo reutilizável */}
          {[
            { label: "Nome", name: "nome", icon: <User size={18} /> },
            { label: "Usuário", name: "usuario", icon: <Users size={18} /> },
            { label: "Foto (URL)", name: "foto", icon: <Image size={18} /> },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1E3A8A] ">
                {field.label}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  {field.icon}
                </span>
                <input
                  type="text"
                  name={field.name}
                  value={(usuario as any)[field.name] || ""}
                  onChange={atualizarEstado}
                  className="w-full pl-10 pr-3 py-3 border bg-white border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021]"
                />
              </div>
            </div>
          ))}

          {/* Tipo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1E3A8A]">Tipo</label>
            <select
              name="tipo"
              value={usuario.tipo || ""}
              onChange={atualizarEstado}
              className="py-3 px-3 border border-slate-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021]"
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="Motorista">Motorista</option>
              <option value="Passageiro">Passageiro</option>
            </select>
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1E3A8A]">Senha</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock size={18} />
              </span>
              <input
                type={mostrarSenha ? "text" : "password"}
                name="senha"
                value={usuario.senha || ""}
                onChange={atualizarEstado}
                className={`w-full pl-10 pr-16 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2
                  ${senhaValida ? "border-green-400 focus:ring-green-400" : "border-slate-300 focus:ring-[#F37021]"}`}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[#1E3A8A]"
              >
                {mostrarSenha ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            {!senhaValida && usuario.senha && (
              <span className="text-xs text-red-500">Mínimo 8 caracteres</span>
            )}
          </div>

          {/* Confirmar senha */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1E3A8A]">
              Confirmar senha
            </label>
            <div className="relative">
              <input
                type={mostrarConfirmarSenha ? "text" : "password"}
                value={confirmarSenha}
                onChange={handleConfirmarSenha}
                className={`w-full px-3 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2
                  ${senhaConfere ? "border-green-400 focus:ring-green-400" : "border-slate-300 focus:ring-[#F37021]"}`}
              />
              <button
                type="button"
                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[#1E3A8A]"
              >
                {mostrarConfirmarSenha ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            {!senhaConfere && confirmarSenha && (
              <span className="text-xs text-red-500">As senhas não coincidem</span>
            )}
          </div>

          {/* Botões */}
          <div className="flex gap-4 mt-10 justify-center">
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
              {isLoading ? <ClipLoader color="#fff" size={22} /> : "Cadastrar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Cadastro;
