import type Carona from "../../../models/Carona";

interface CardCaronaProps {
    carona: Carona;
}

function CardCarona({ carona }: CardCaronaProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{carona.enderecoOrigem}</h5>
                <p className="card-text">{carona.enderecoDestino}</p>
                <p className="card-text">{carona.tempo}</p>
                <p className="card-text">{carona.vagas}</p>
            </div>
        </div>
    );
}

export default CardCarona;