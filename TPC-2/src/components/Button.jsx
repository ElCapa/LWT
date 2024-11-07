function Button ({children, ...props}){
  return(
      <div>
          <button className="px-4 py-8 font-semibold uppercase bg-amber-400 hover:bg-amber-600 border-none"{...props}>{children}</button>
      </div>
  );
}
export default Button;