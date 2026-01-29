import type Categoria from "./Categoria";

export default interface Usuario {
    id: number,
    nome: string,
    usuario: string,
    senha: string,
    tipo: string,
    foto: string,
    categorias: Categoria
}