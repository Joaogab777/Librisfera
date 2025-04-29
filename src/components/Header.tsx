import React from "react";
import { Button } from "./ui/button"; // Componente do Shadcn

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 text-violet-950 bg-gradient-to-r from-roxo-noturno to-[var(--lilas-nebuloso)]">
      <h1 className="text-3xl font-bold text-white">Librisfera</h1>
      <Button className="text-white">Login</Button>
    </header>
  );
};

export default Header;
