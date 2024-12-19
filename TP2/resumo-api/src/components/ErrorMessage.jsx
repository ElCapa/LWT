const ErrorMessage = ({ message }) => {
    return (
      <div className="text-center text-red-500 font-semibold mt-4">
        <p>Ocorreu um erro ...</p>
        <span>{message}</span>
      </div>
    );
  };
  
  export default ErrorMessage;
  