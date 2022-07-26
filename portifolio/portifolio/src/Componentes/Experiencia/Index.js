import Cargos from "../Cargos/Index";
import "./Experiencia.css"

const Experiencia = () => {
    return (<div>


        <div id="resume" className="experiencia">
            <h2>Experiencia Profissional</h2>

            <Cargos funcao="Coordenador de TI | Desenvolvedor Front-End" empresa="Faraway Tecnologia"
                dataInicio="Abril 2022" dataFim="Atual"

                desc="Responsável por gerenciar, sustentar, alinhar com todas as partes (Desenvolvedor
            Back End, Design e Devops), e executar as entregas relacionadas aos principais Sistema
            WEB da empresa. Principais Tecnologias: JavaScript, CSS3, HTML5, REACT, GCP"    />

            <Cargos funcao="Coordenador de TI" empresa="Contabilizei"
                dataInicio="Setembro de 2020" dataFim="Atual"

                desc="Gerenciar entregas da equipe de TI a nível internacional, garantir a
            disponibilidade de todos os recursos, gerenciar projetos de desenvolvimento, infraestrutura
            e segurança da informação, administrar redes de servidores em todas as unidades,
            Monitorar e prover soluções pró-ativas à servidores Linux Ubuntu, Windows Server e
            Fortigate firewall e automatizar tarefas"

            />


            <Cargos funcao="Analista de Infraestrutura e Suporte" empresa="Contabilizei"
                dataInicio="Julho 2018" dataFim="Setembro de 2020"

                desc="Administrar redes de servidores e computadores, garantir a alta
            disponibilidade, estabilidade e integridade dos recursos de rede, em todas as sedes da
            contabilizei, Monitorar e prover soluções pró ativas à servidores Linux Ubuntu, Windows
            Server e Fortigate firewall, automatizar tarefas e prestar suporte para softwares e
            dispositivos de rede --  Informações adicionais: Participação ativa na mudança de sede, realizando a migração
            dos recursos de rede tendo poucas horas de indisponibilidade de nossos recursos.            
            "

            />

            <Cargos funcao="Analista de Suporte Técnico" empresa="MegaMídia Digital"
                dataInicio="Outubro 2017" dataFim="Julho 2018"

                desc="Manutenção em Servidores Windows, Linux. Help Desk Remoto à
            clientes sobre Mídia Digitais instaladas."
            />

            <Cargos funcao="Analista de infraestrutura de redes." empresa="Pellissari Soluções"
                dataInicio="Outubro 2015" dataFim="Agosto 2017"

                desc=" Manutenção em Servidores Windows, Linux, Servidores de Email,
            Active Directory, DHCP, Hyper-V, VmWare, VirtualBox, GPOs, PfSense, Aker Firewall, S4
            Firewall, Configuração de rotinas de backup em Windows Server Backup e Cobian,
         
            --Implantação de serviços Cloud: Ferramenta de Backup Cloud Berry Backup,
            Virtualização em Amazon Cloud e Implantação antivírus BitDefender Cloud.
            --Consultoria em infraestrutura de redes em empresas de diversas cidades brasileiras,
            --Implementação de infraestrutura em diversos clientes tais como Lojas do grupo Gmad,
            Jornal da Manhã, Prefeitura Municipal de Guarapuava, Ceral - Cooperativa de Eletrificação
            Rural de Arapoti, entre outros."
            />

            <Cargos funcao=" Estagiário de desenvolvimento de sistemas WEB" empresa="BlueBit"
                dataInicio="Março 2015" dataFim="Agosto 2015"

                desc="Desenvolvimento em Java e HTML com manutenção de banco
            MySql, e suporte remoto ao cliente. Resolução de Tickets/chamados nos Sistemas de
            Retaguarda dos clientes, Estoque, Compras, Financeiro e Faturamento"
            />

            <Cargos funcao="  Estagiário em suporte técnico." empresa="Klop Informatica"
                dataInicio="Setembro 2013" dataFim="Fevereiro 2015"

                desc="Manutenção de fontes, impressoras, desktops, notebooks, nobreaks,
            eletrônica em placa de hardware, cabeamento redes, instalação de softwares e aplicativos,
            suporte por telefone, orçamento de serviços, e atendimento ao cliente."
            />

        </div>

      


    </div>);
}

export default Experiencia;