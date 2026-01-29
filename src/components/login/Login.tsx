/*import { useState } from "react";

function Login () {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const usuario = {
      nome,
      email,
      senha
    };

    console.log("Usuário:", usuario);
    alert("Login realizado!");
  }

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit">
          Entrar
        </button>

      </form>
    </div>
  );
}

export default Login;
*/

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";
import type Usuario from "../../models/Usuario";

function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/caronas");
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 font-sans overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />
      <div className="absolute inset-0 bg-black/10" />

      {/* BRILHOS */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[#1E3A8A]/10 blur-[140px]" />

      {/* CARD */}
      <div className="relative z-10 grid place-items-center w-full max-w-xl backdrop-blur-md">

        <form
          onSubmit={login}
          className="flex flex-col gap-6 w-full max-w-md bg-white/90 p-10 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl font-black text-[#1E3A8A] text-center mt-2 mb-6">
            Entrar
          </h2>

          {/* Usuário */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1E3A8A]">
              Usuário
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <User size={18} />
              </span>
              <input
                type="text"
                name="usuario"
                value={usuario.usuario || ""}
                onChange={atualizarEstado}
                className="w-full pl-10 pr-3 py-3 border bg-white border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021]"
              />
            </div>
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1E3A8A]">
              Senha
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock size={18} />
              </span>
              <input
                type={mostrarSenha ? "text" : "password"}
                name="senha"
                value={usuario.senha || ""}
                onChange={atualizarEstado}
                className="w-full pl-10 pr-16 py-3 border bg-white border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37021]"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[#1E3A8A]"
              >
                {mostrarSenha ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-full bg-[#F37021] hover:bg-[#d65d18] text-white font-black transition flex justify-center"
          >
            Entrar
          </button>

          {/* Cadastro */}
          <p className="text-sm font-medium text-center text-[#1E3A8A] mt-2">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastrarusuario"
              className="font-bold text-[#F37021] hover:underline"
            >
              Cadastre-se
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
}

export default Login;
