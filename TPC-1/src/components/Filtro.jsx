import React, { useState } from 'react';
import './Filtro.css'; 

const Filtro = (props) => {
  const [anoSelecionado, setAnoSelecionado] = useState('');

  const dropdownChangeHandler = (event) => {
    setAnoSelecionado(event.target.value);
    if (props.onFiltroAno) {
      props.onFiltroAno(event.target.value);
    }
  };

  return (
    <div className="filtro filtro-control">
      <label>Ano</label>
      <select value={anoSelecionado} onChange={dropdownChangeHandler}>
        <option value="">Selecione um ano</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
};

export default Filtro;
