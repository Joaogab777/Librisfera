import React from "react";
import { Button } from "./ui/button"; // Componente do Shadcn

const Header: React.FC = () => {
  return (
    <header className="flex justify-end h-1/12 bg-transparent backdrop-blur-[3px] items-center p-4">
      <Button className="text-[var(--lilas-nebuloso)] border-2 border-transparent shadow-lg hover:shadow-purple-500/50 bg-neutral-800 hover:border-2 hover:border-[var(--lilas-nebuloso)]">Login</Button>
    </header>
  );
};

export default Header;
