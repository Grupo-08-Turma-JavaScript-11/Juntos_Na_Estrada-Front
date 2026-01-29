import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type Categorias from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormCategorias() {

    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)

    const navigate = useNavigate()

    const {id} =  useParams<{id: string}>()

    async function buscarPorId(id: string) {
        try{
            await buscar(`/categorias/:${id}`, setCategoria)
        }catch (error: any){
            if (error.toString().includes('404')){
                alert("Categoria não encontrado!")
            }
        }
    }

    useEffect(() => {
        if (id !== undefined){
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }


    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined){
            try{
                await atualizar(`/categorias/${id}`, categoria, setCategoria)
                alert("O Categoria foi atualizado com sucesso!")
            }catch (error: any) {
                if (error.toString().includes('403')){
                    alert("Categoria não encontrado!")
                }else {
                    alert("Erro ao localizar categoria")
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert("O categoria foi cadastrada com sucesso!")
            } catch (error:any) {
                    alert('Erro ao cadastrar categoria.')
                }
            }

            retornar()
        }

       

    return(
        <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-400 p-8">
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-lg text-center my-8 font-semibold">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>  
            <form className="w-1/2 flex flex-col gap-4"
                onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label  className="font-semibold" htmlFor="descricao">Categoria</label>
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Descrição da categoria"
                        className="border-2 border-slate-700 rounded p-2 bg-white"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-sky-400
                        hover:bg-sky-800 w-1/2 py-2 mx-auto block"
                    type="submit">
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar' }</span>
                </button>
            </form>
            
        </div>
        </div>
    )

}

export default FormCategorias



