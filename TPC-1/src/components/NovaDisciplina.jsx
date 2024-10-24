import React, { useState } from 'react';

import './NovaDisciplina.css';
import FormNovaDisciplina from './FormNovaDisciplina';

const NovaDisciplina = (props) => {
  const [estaAdicionando, setEstaAdicionando] = useState(false);

  const guardarDisciplinaHandler = (dadosDisciplinaInserida) => {
    const dadosDisciplina = {
      ...dadosDisciplinaInserida,
      id: Math.random().toString(),
    };

    props.onAddDisciplina(dadosDisciplina);
    setEstaAdicionando(false);
  };

  const startAddingHandler = () => {
    setEstaAdicionando(true);
  };

  const stopAddingHandler = () => {
    setEstaAdicionando(false);
  };

  return (
    <div className='new-disciplina'>
        {!estaAdicionando &&(
            <button onClick={startAddingHandler}>Nova Disciplina</button>
        )}
        {estaAdicionando &&(
            <FormNovaDisciplina
            onSaveDisciplinaData={guardarDisciplinaHandler}
            onCancel ={stopAddingHandler}
            />
        )}
        
    </div> 
  );
};

export default NovaDisciplina;