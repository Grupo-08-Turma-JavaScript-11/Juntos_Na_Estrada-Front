import type Carona from "./Carona";

export default interface Categoria {
    id: number;
    descricao: string;
    caronas: Carona[];
}