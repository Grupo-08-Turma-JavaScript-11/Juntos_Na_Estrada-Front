import axios from 'axios'; 

const api = axios.create({
    baseURL: 'https://brasilapi.com.br/api/cep/v1/'
});

export const buscar = async (cep: string, setDados: Function) => {
    const resposta = await api.get(cep);
    setDados(resposta.data);
}