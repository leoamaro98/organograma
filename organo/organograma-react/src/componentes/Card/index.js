import "./Card.css"


const Card = ({nome, imagem, cargo, corDeFundo}) => {
    return (<div className='card'>
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} ></img>
        </div>

        <div className="rodape">
            <h5>{nome}</h5>
            <h4>{cargo}</h4>

        </div>



    </div>);
}

export default Card;