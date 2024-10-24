import NotaDisciplina from './NotaDisciplina';
import './Disciplinas.css';
import Card from './Card';

function Disciplinas(props) {
  const listaD = props.listaDisciplinas;
  return (
    <Card>
      {listaD.map((disci) => (
        <NotaDisciplina
          nome={disci.nome}
          valorNota={disci.valorNota}
          dataAvalia={disci.dataAvalia}
        />
      ))}
    </Card>
  );
}

export default Disciplinas;
