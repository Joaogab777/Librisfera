import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-1">
        <Search />
        <div className="grid grid-cols-1 h-8/12 sm:grid-cols-2 text- md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          <BookCard
            title="O Alquimista"
            author="Paulo Coelho"
            coverImage="https://images-na.ssl-images-amazon.com/images/I/71wslz9Z1KL.jpg"
          />
          <BookCard
            title="1984"
            author="George Orwell"
            coverImage="https://images-na.ssl-images-amazon.com/images/I/71pA7mPcxGL.jpg"
          />
          <BookCard
            title="Dom Casmurro"
            author="Machado de Assis"
            coverImage="https://images-na.ssl-images-amazon.com/images/I/71qqXTfYOSL.jpg"
          />
          <BookCard
            title="A Menina que Roubava Livros"
            author="Markus Zusak"
            coverImage="https://images-na.ssl-images-amazon.com/images/I/81O1Gb9pPzL.jpg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
