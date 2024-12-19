import { useState } from "react";

const InputBar = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        placeholder="Colar o link do artigo"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-2/3 px-4 py-2 border rounded-l outline-none"
      />
      <button
        onClick={() => onSubmit(url)}
        className="px-6 py-2 bg-gray-200 border rounded-r hover:bg-gray-300"
      >
        ➔
      </button>
    </div>
  );
};

export default InputBar;
