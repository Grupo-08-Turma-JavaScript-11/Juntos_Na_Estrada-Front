import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormCategorias from "./components/categorias/formCategorias/FormCategorias";
import ListaCategoria from "./components/listaCategoria/ListaCategoria";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategorias";
import Navbar from "./components/navbar/Navbar";
import ListarCaronas from "./components/carona/listarcaronas/ListarCaronas";
import FormCarona from "./components/carona/formcarona/FormCarona";
import DeletarCarona from "./components/carona/deletarcarona/DeletarCarona";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FormCategorias />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/deletarcategorias/:id" element={<DeletarCategoria />} />
          <Route path="/editarcategorias/:id" element={<FormCategorias />} />
          <Route path="/" element={<ListarCaronas />} />
          <Route path="/caronas" element={<ListarCaronas />} />
          <Route path="/cadastrarcaronas" element={<FormCarona />} />
          <Route path="/editarcaronas/:id" element={<FormCarona />} />
          <Route path="/deletarcaronas/:id" element={<DeletarCarona />} />
          <Route path="/cadastrarusuario" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
