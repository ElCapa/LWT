function Input({label, type, onChange, hasError}){

  let classesDoLabel = `block text-xs font-bold uppercase text-stone-300 py-2 ${hasError ? 'text-red-600' : 'text-stone-300'}`; 
  let classeIput = `w-full px-3 py-2 ${hasError ? 'border border-red-500' : ''}`;
  return (

      <p>
          <label className={classesDoLabel}>{label}</label>
          <input 
              type ={type}
              onChange ={onChange}
              className={classeIput}
          />
      </p>
  );
}
export default Input;