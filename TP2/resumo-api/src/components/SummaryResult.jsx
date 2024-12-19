const SummaryResult = ({ summary }) => {
    return (
      <div className="w-3/4 mx-auto my-8 p-6 bg-gray-100 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">
          Este é o resultado do <span className="text-blue-600">Resumo</span>
        </h2>
        <p className="text-gray-700">{summary}</p>
      </div>
    );
  };
  
  export default SummaryResult;
  