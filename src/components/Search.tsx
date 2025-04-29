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
    <div className="flex justify-center items-center my-8">
      <Input
        type="text"
        placeholder="Procure por livros, autores..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-96 p-2 rounded-l-md"
      />
      <Button onClick={handleSearch} className="p-2 rounded-r-md bg-purple-600 text-white">
        Buscar
      </Button>
    </div>
  );
};

export default Search;
