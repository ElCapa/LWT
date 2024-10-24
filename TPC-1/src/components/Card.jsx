import './Disciplinas.css';

function Card(props) {
  return (
    <div className="disciplinas">{props.children}</div>
  );
}

export default Card;