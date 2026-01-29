import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Carona {
    id: number,
    distancia: number,
    velocidade: number,
    enderecoOrigem: string,
    enderecoDestino: string,
    tempo: number,
    vagas: number,
    categoria: Categoria,
    usuario: Usuario
}