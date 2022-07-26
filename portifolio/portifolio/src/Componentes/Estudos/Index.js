import Formacao from "../Formacao/Index";
import "./Estudos.css"


const Estudos = () => {
    return (<div>

        <div id='formacao' className="estudos">
            <h5>FORMAÇÃO</h5>
            <Formacao faculdade="Faculdade Uniopet" curso="Analise de Sistemas" dataInicio="Junho 2021" dataFim="Junho 2022" />
            <Formacao faculdade="Faculdade das Industrias" curso="Bacharel Sistemas da informação" dataInicio="Janeiro 2018" dataFim="Janeiro 2021" />
        </div>


    </div>);
}

export default Estudos;