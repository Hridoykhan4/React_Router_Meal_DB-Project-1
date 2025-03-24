import { useLoaderData, useParams } from "react-router-dom";
import { addMarkBookToLS, addToWishBooks } from "../../utils/addToLs";

const BookDetail = () => {
  const bookDetailData = useLoaderData();
  const { bookId } = useParams();

  const book = bookDetailData.find((book) => book.bookId === parseInt(bookId));
  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    publisher,
    bookId: currentId,
  } = book;

  const handleMarkAsRead = (id) => {
    addMarkBookToLS(id);
  };

  const handleWishRead = (id) => {
    addToWishBooks(id)
  };

  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div className="lg:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold">
            {bookName}
            <span className="text-indigo-600">Choices</span>
          </h2>
          <p>By : {author}</p>
          <p className="mt-4 text-gray-600">{review}</p>

          <div className="flex gap-6 my-4">
            <p>No. of Pages: </p>
            <p>{totalPages}</p>
          </div>
          <div className="flex gap-6 my-4">
            <p>Publisher: </p>
            <p>{publisher}</p>
          </div>
          <div className="mt-8">
            <button
              onClick={() => handleMarkAsRead(currentId)}
              className="bg-gray-900 mr-4 text-gray-100 px-5 py-3 font-semibold rounded"
            >
              Mark As Read
            </button>
            <button
              onClick={() => handleWishRead(currentId)}
              className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
            >
              Add To WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
