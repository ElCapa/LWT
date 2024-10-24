import './App.css';
import Disciplinas from './components/Disciplinas';
import NovaDisciplina from './components/NovaDisciplina';
import Filtro from './components/Filtro'
import { NOTAS_DISCIPLINAS } from './components/data';
import React, {useState} from 'react';

function App() {
  const [anoSelecionado, setAnoSelecionado] = useState('');
  const [dadosDisciplinas, setDadosDisciplinas] = useState(NOTAS_DISCIPLINAS);

  const onAddDisciplinasHandler = (disciplina) => {
    setDadosDisciplinas((prevState)=>{
      return [disciplina, ...prevState];
    })
  }
  const changeAnoHandler = (ano) => {
    setAnoSelecionado(ano);
  };
  const disciplinasFiltradas = dadosDisciplinas.filter((disciplina) => {
    return anoSelecionado === '' || new Date(disciplina.dataAvalia).getFullYear().toString() === anoSelecionado;
  });
  return (
    <div>
      
      <NovaDisciplina onAddDisciplina={onAddDisciplinasHandler} />
      <Filtro anoSelecionado={anoSelecionado} onFiltroAno={changeAnoHandler} />
      <Disciplinas listaDisciplinas={disciplinasFiltradas} />
    </div>
  );
}

export default App;
