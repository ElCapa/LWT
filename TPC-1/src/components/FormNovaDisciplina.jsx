import React, { useState } from 'react';
import './FormNovaDisciplina.css';

const FormNovaDisciplina = (props) => {

  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nota, setNota] = useState('');
  const [dataAvalia, setDataAvalia] = useState('');

  const nomeChangeHandler = (event) => {
    setNomeDisciplina(event.target.value);
  };
  const notaChangeHandler = (event) => {
    setNota(event.target.value);
  };
  const dataAvaliaChangeHandler = (event) => {
    setDataAvalia(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    let novaDisciplina = {
      dataAvalia: new Date(dataAvalia),
      nome: nomeDisciplina,
      valorNota: nota,
    };

    props.onSaveDisciplinaData(novaDisciplina);

    setDataAvalia('');
    setNomeDisciplina('');
    setNota('');

  };

  const cancelHandler = () =>{
    props.onCancel();
  }


  return (
    <div className="new-disciplina">
      <form onSubmit={submitHandler}>
        <div className="new-disciplina__controls">
          <div className="new-disciplina__control">
            <label>Disciplina</label>
            <input type="text" 
            value={nomeDisciplina} 
            onChange={ nomeChangeHandler }  />
          </div>
          <div className="new-disciplina__control">
            <label>Nota</label>
            <input type="number" min="0" step="1" max="20" 
            value={nota}  
            onChange={ notaChangeHandler } />
          </div>
          <div className="new-disciplina__control">
            <label>Data avaliação</label>
            <input type="date" min="2010-01-01" step="1" max="2050-12-31" 
            value={dataAvalia} 
            onChange={ dataAvaliaChangeHandler } />
          </div>
        </div>
        <div className="new-disciplina__actions">
          <button type="submit">Guardar</button>
          <button type='reset' onClick={cancelHandler}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default FormNovaDisciplina;