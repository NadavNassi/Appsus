const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {

  return (
    <Link className="decoration-none" to={`/book/read/${book.id}`}>
      <div className="card">
        <div className="card-img">
          <img src={book.thumbnail} alt="" />
        </div>
        <div className="card-details">
          <p>{book.title}</p>
        </div>
      </div>
    </Link>
  );
}
