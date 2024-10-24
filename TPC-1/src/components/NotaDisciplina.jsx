import DataAvalia from './DataAvalia';

import './NotaDisciplina.css';

function NotaDisciplina(props) {

  return (
    <div className="disciplina-item">
      <DataAvalia data={props.dataAvalia} />
     <div className="disciplina-item__description">
        <h2>{props.nome}</h2>
        <div className="disciplina-item__valor">{props.valorNota}</div>
      </div>
     
    </div>
  );
}

export default NotaDisciplina;
