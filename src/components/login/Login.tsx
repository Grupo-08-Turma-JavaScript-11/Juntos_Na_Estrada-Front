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
