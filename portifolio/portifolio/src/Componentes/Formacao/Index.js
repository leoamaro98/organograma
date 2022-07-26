import "./Formacao.css"


const Formacao = (props) => {
    return (
        <div className="formacao">
            <div className="cabecalho-formacao" >
                <h3>{props.faculdade}</h3>
                <h4>{props.curso}</h4>
            </div>

            <div>
                <span>{props.dataInicio} - {props.dataFim}</span>
            </div>

        </div>);
}

export default Formacao;