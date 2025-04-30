import React, { useState } from "react";
import { Button } from "./ui/button"; // Usando componentes do Shadcn
import { Input } from "./ui/input"; // Usando componentes do Shadcn

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    console.log("Buscando por:", query);
    // Aqui você pode adicionar a lógica de busca
  };

  return (
    <div className="flex justify-center flex-col gap-5 items-center my-8">
      <h1 className="text-8xl font-bold font-(family-name:--font-destaque) text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 via-purple-500 to-purple-800">Librisfera</h1>
      <div className="flex gap-1.5">
        <Input
          type="text"
          placeholder="Procure por livros, autores..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-96 p-2 rounded-l-md !bg-transparent border-none focus:outline-indigo-600"
        />
        <Button onClick={handleSearch} className="p-2 rounded-r-md bg-gradient-to-t shadow-lg hover:shadow-purple-500/50 from-indigo-600 to-purple-500 text-white">
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default Search;
