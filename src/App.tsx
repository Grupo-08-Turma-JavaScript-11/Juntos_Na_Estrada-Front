import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormCategorias from './components/categorias/formCategorias/FormCategorias'
import ListaCategoria from './components/listaCategoria/ListaCategoria'
import DeletarCategoria from './components/categorias/deletarCategorias/DeletarCategorias'
import Navbar from './components/navbar/Navbar'



function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<FormCategorias/>} />
                    <Route path='/categorias' element={<ListaCategoria />} />
                    <Route path='/deletarcategorias/:id' element={<DeletarCategoria />} />
                    <Route path='/editarcategorias/:id' element={<FormCategorias />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
