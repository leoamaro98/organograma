import Contatos from "../Contatos/Index";
import "./Sobre.css"


const Sobre = (props) => {
    return (<div >
        <div id="about" className="sobre">
            <h1>{props.nome} <span>Oliveira</span></h1>
            <div>BRASILEIRO, 23 ANOS<a href="mailto:leonardo.amaro1998@gmail.com">  leonardo.amaro1998@gmail.com</a></div>
            <p> Oi, eu sou o Leo, um jovem de 23 anos aficionado por técnologia e esportes. Apesar de novo, iniciei na área com 14 anos e atualmente atuo como Coordenador de TI e Desenvolvedor Front-End.
                <p>Tenho ampla experiencia em Infreastrutura de redes e Segurança da informação, mas visando evoluir profissionalmente, migrei para área que tanto amo, de desenvolvimento.</p></p>

            <Contatos href="https://github.com/leoamaro98" svg="/imagens/github.svg" />
            <Contatos href="https://www.linkedin.com/in/leonardo-amaro-101086121" svg="/imagens/linkedin.svg" />
            <Contatos href="https://www.faraway.com.br/" svg="/imagens/logofaraway.png" />


        </div>
    </div>);
}

export default Sobre;