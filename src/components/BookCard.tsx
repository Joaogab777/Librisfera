import React from "react";
import { Card } from "./ui/card"; // Usando o componente Card do Shadcn

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverImage }) => {
  return (
    <Card className="w-60 p-4 border border-gray-300 rounded-lg shadow-md">
      <img src={coverImage} alt={title} className="w-full h-60 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-500">{author}</p>
    </Card>
  );
};

export default BookCard;
