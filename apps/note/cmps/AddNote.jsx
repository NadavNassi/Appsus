const { Link, Route } = ReactRouterDOM;
import { bookService } from "../services/book-service.js";
import { ReviewAdd } from "../cmps/ReviewAdd.jsx";
import { Loader } from "../cmps/Loader.jsx";

export class AddNote extends React.Component {
  state = {};

  closeModal = () => {
    const bookId = this.props.match.params.bookId;
    this.props.history.push(`/book/${bookId}`);
  };
  onOutSideClick = (ev) => {
    if (ev.target.classList.contains("modal-container")) {
      const bookId = this.props.match.params.bookId;
      this.props.history.push(`/book/${bookId}`);
    }
  };

  render() {
    const { book } = this.state;
    if (!book) return <div>Loading...</div>;

    return (
      <div onClick={this.onOutSideClick} className="modal-container">
        <div className="modal ">
          <span onClick={this.closeModal} className="close-modal">
            X
          </span>
        </div>
      </div>
    );
  }
}
