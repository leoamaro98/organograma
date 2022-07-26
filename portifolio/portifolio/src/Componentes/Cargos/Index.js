import "./Cargos.css"


const Cargos = (props) => {
    return (
        <div className="cargos">
            <div className="cabecalho" >
                <h3>{props.funcao}</h3>
                <h4>{props.empresa}</h4>
                <p>{props.desc}</p>
            </div>

            <div>
                <span>{props.dataInicio} - {props.dataFim}</span>
            </div>


        </div>
    );
}

export default Cargos;