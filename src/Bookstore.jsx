import Book from "./Book";

function Bookstore({ books }) {
  return (
    <div>
      <h3>Books: {books.length}</h3>

      {books.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
}

export default Bookstore;
