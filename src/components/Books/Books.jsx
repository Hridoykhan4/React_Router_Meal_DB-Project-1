import { useEffect, useState } from "react";
import Book from "../Book/Book";
import wave from "../../assets/wave.svg";
import Hero from "../Hero/Hero";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [counter, setCounter] = useState(4);
  useEffect(() => {
    fetch("/BookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="relative  min-h-[calc(100vh-90px)] flex  flex-col justify-center items-center">
        <Hero></Hero>
        <img src={wave} className="w-full absolute bottom-0" alt="" />
      </div>
      <h3 className="text-center my-4 font-bold text-3xl">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-4">
        {books.slice(0, counter).map((book) => (
          <Book listStatus={"main"} key={book.bookId} book={book}></Book>
        ))}
      </div>

      {counter > 4 ? (
        <div className="flex justify-center my-8">
          <a
            onClick={() => setCounter(4)}
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Show Less</span>
          </a>
        </div>
      ) : (
        <div className="flex justify-center my-8">
          <a
            onClick={() => setCounter(books.length)}
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">See all</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Books;
