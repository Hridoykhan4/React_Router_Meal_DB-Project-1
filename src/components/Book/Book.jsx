import { Link } from "react-router-dom";

const Book = ({ book, listStatus }) => {
  const {
    bookName,
    image,
    tags,
    bookId,
    totalPages,
    publisher,
    rating,
    yearOfPublishing,
  } = book;

  const handleRemoveReadList = (id) => {
    console.log(id);
  };

  const handleRemoveWishList = (id) => {
    console.log(id);
  };

  return (
    <Link to={`/book/${bookId}`} className="card bg-base-100  shadow-sm">
      <figure className="bg-lime-200 py-7 rounded-lg">
        <img src={image} className="h-[166px] object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>Publisher: {publisher}</p>
        <p>Year of Publishing: {yearOfPublishing}</p>
        <ul className="flex gap-4 list-disc list-inside">
          {tags.map((tag, i) => (
            <li className="bg-lime-200 px-3 py-1 rounded" key={i}>
              {tag}
            </li>
          ))}
        </ul>
        <p>Total Pages: {totalPages}</p>
        <p>Rating: {rating}</p>
        {listStatus === "readList" && (
          <button
            onClick={() => handleRemoveReadList(bookId)}
            className="btn self-start btn-error text-white"
          >
            Remove From Read List
          </button>
        )}
        {listStatus === "wishList" && (
          <button
            onClick={() => handleRemoveWishList(bookId)}
            className="btn self-start btn-error text-white"
          >
            Remove From Wish List
          </button>
        )}
      </div>
    </Link>
  );
};

export default Book;
