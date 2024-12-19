import { useState } from "react";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import ErrorMessage from "./components/ErrorMessage";
import SummaryResult from "./components/SummaryResult";
import HistoryList from "./components/HistoryList";
import './App.css';

function App() {
  const [summary, setSummary] = useState(""); 
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [history, setHistory] = useState([]); 

  const fetchSummary = async (url) => {
    const apiUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
      url
    )}&lang=pt&engine=2`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "34bb5a035bmshce572a0edb023c3p1b1243jsn5ed1c0323cbe",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      setError("");
      setSummary("");

      // Atualiza o histórico de links
      setHistory((prevHistory) => [...new Set([url, ...prevHistory])]);

      const response = await fetch(apiUrl, options);
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(
          data.message || "Erro ao buscar o resumo. Verifique a URL."
        );
      }

      setSummary(data.summary || "Nenhum resumo encontrado.");
    } catch (err) {
      setError(err.message || "Ocorreu um erro ao buscar o resumo.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (url) => {
    if (!url) {
      setError("Por favor, insira uma URL válida.");
      return;
    }
    fetchSummary(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-green-100">
      <Header />
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold">
          Faça resumo de Artigos com{" "}
          
        </h1>
        <span className="text-orange-500 text-4xl font-bold">API de OpenAI</span>
        <p className="mt-5 text-lg text-gray-600 sm:text-xl">
        Esta é uma ferramenta para trabalhar com artigos e que pode ser usado
        para transformar artigos longos num resumo claro e conciso
        </p>
      </div>
      <InputBar onSubmit={handleSubmit} />
      <HistoryList history={history} />
      {loading && <p className="text-center text-gray-600">Carregando...</p>}
      {error && <ErrorMessage message={error} />}
      {summary && <SummaryResult summary={summary} />}
      
    </div>
  );
}

export default App;
