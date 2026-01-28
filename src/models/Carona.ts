export default interface Carona {
    id: number,
    distance: number,
    velocidade: number,
    enderecoOrigem: string,
    enderecoDestino: string,
    tempo: number,
    vagas: number,
    categoria: Object,
    usuario: Object
}