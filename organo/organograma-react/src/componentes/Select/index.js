import "./Select.css"


const Select = (props) => {


    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value)

    }


    return (
        <div>
            <label>{props.label}</label>
            <select  value ={props.valor} onChange={aoSelecionado} required={props.obrigatorio} className="form-select" >
                <option value=""></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>


    );
}

export default Select;