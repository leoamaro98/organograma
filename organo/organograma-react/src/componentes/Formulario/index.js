import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import Select from "../Select";
import Butao from "../Botao";
import { useState } from "react"




const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() //previne comportamento padrão, no caso submit para proxima pagina
        props.aoColaboradorCadastrado({ nome, cargo, imagem, time })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />

                <Select
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Butao>
                    Criar Card
                </Butao>
            </form>
        </section>

    );
}

export default Formulario;