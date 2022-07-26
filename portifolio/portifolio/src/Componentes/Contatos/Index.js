import "./Contatos.css"

const Contatos = (props) => {
    return (
        <div className="contatos">
            <a type="button" className='btn btn-secondary' href={props.href} > <img src={props.svg} alt={props.svg}></img> </a>
        </div>);
}

export default Contatos;


