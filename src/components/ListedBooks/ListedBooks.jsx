import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getMarkedAsReadBooks, getStoredWishList } from "../../utils/addToLs";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortList, setSortList] = useState([]);
  const [activate, setActivate] = useState(0);
  const [sortState, setSortState] = useState("");
  useEffect(() => {
    if (allBooks.length) {
      const storedMarkRead = getMarkedAsReadBooks();
      const matchedBooks = allBooks.filter((book) =>
        storedMarkRead.includes(book.bookId)
      );
      setReadList(matchedBooks);

      const storedWish = getStoredWishList();
      const matchedWish = allBooks.filter((book) =>
        storedWish.includes(book.bookId)
      );
      setWishList(matchedWish);
    }
  }, [allBooks]);

  const handleSortBooks = (sortType) => {
    setSortState(sortType);
    if (activate === 0) {
      let sortedReadList = [...readList];
      if (sortType === "rating") {
        sortedReadList.sort((a, b) => a.rating - b.rating);
      }
      if (sortType === "page") {
        sortedReadList.sort((a, b) => b.totalPages - a.totalPages);
      }

      setSortList(sortedReadList);
    } else {
      let sortedWishList = [...wishList];
      if (sortType === "rating") {
        sortedWishList.sort((a, b) => b.rating - a.rating);
      }
      if (sortType === "page") {
        sortedWishList.sort((a, b) => a.totalPages - b.totalPages);
      }

      setSortList(sortedWishList);
    }
  };

  return (
    <div className="w-11/12 mx-auto overflow-hidden ">
      <div className="text-center  my-10 block">
        <details className="dropdown">
          <summary className="btn-success px-10 text-white p-3 rounded-lg btn m-1">
            {sortState ? `Sort By ${sortState}` : "Sort By"} <span> ⬇ </span>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => handleSortBooks("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSortBooks("page")}>
              <a>No. of Pages</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex  -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap  ">
        <a
          onClick={() => {
            setActivate(0);
            setSortState("");
            setSortList([]);
          }}
          rel="noopener noreferrer"
          //   href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            activate === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read List</span>
        </a>
        <a
          onClick={() => setActivate(1)}
          rel="noopener noreferrer"
          //   href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            activate === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wish List</span>
          <p></p>
        </a>
      </div>
      <div className="my-4">
        {activate === 0 ? (
          <div>
            <div>
              {readList.length ? (
                <h3>Books I Read</h3>
              ) : (
                "No Book is selected as mark read"
              )}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {(sortState ? sortList : readList).map((book) => (
                  <Book
                    listStatus={"readList"}
                    key={book.bookId}
                    book={book}
                  ></Book>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h3>WishList: {wishList.length}</h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {(sortState ? sortList : wishList).map((book) => (
                  <Book
                    key={book.bookId}
                    listStatus={"wishList"}
                    book={book}
                  ></Book>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
