import React, { useState } from 'react';
import copy from '../assets/copy.svg'
const HistoryList = ({ history }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(link);
    setTimeout(() => setCopied(""), 2000);
  
  };

  return (
    <div className="flex flex-col gap-1 max-h-20 mr-60 ml-60 p-4 overflow-y-auto bg-white rounded shadow-md">
      {history.length === 0 ? (
        <p className="text-gray-500">Nenhum link no histórico.</p>
      ) : (
        history.map((link, index) => (
          <div
            key={`link-${index}`}
            className="flex items-center gap-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            <button
              className="copy_btn flex items-center justify-center w-8 h-8 bg-white border rounded hover:bg-gray-300"
              onClick={() => handleCopy(link)}
            >
              <img
                src={copy}
                alt={copy}
                className="w-4 h-4 object-contain"
              />
            </button>
            <p className="flex-1 font-sans text-blue-700 font-medium text-sm truncate">
              {link}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryList;
