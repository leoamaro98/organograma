import Menu from "./Componentes/Menu";
import Sobre from "./Componentes/Sobre/Index";
import "./App.css"
import Experiencia from "./Componentes/Experiencia/Index";
import Estudos from "./Componentes/Estudos/Index";
import Skills from "./Componentes/Skills/Index";
import Certificacoes from "./Componentes/Certificacoes/Index";



function App() {
  return (
    <div className="App">
      <Menu />
      <Sobre nome="Leonardo" />
      <Experiencia />
      <Estudos/>
      <Skills/>
      <Certificacoes/>
    </div>
  );
}

export default App;
