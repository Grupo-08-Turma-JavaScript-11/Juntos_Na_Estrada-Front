import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../service/Service"
import type Categoria from "../../../models/Categoria"



function DeletarCategoria(){

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const {id} =  useParams<{id: string}>()

    async function buscarPorId(id: string){
        try{
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any){
            alert('Categoria não encontrada!')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria(){
        try{
            await deletar(`/categorias/${id}`)
            alert("Categoria deletada com sucesso!")
        } catch (error: any){
            if (error.toString().includes('404')){
                alert("Categoria não encontrada!")
            }
        }

        retornar()  

    }  

    function retornar() {
        navigate("/categorias")
    }

    return(
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4x1 text-center my-4">Deletar Categoria</h1>
            <p className="text-center font-semibold mb-4">
                Voce tem certeza que deseja deletar esta Categoria?
            </p>
            <div className="border flex flex-col rounded-2x1 overflow-hidden justify-between">
                <header
                    className="py-2 px-6 bg-sky-600 text-white font-bold text-2x1">
                    Categoria
                </header>
                <p className="p-8 text-3x1 bg-slate-200 h-full">{categoria.descricao}</p>
                <div className="flex">
                    <button
                        className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-indigo-400
                            hover:bg-indigo-600 flex items-center justify-center"
                            onClick={deletarCategoria}>
                            <span>Sim</span> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria