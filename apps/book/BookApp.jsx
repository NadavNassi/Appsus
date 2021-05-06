import { booksService } from './services/book.service.js';
import { BooksList } from './cmps/BooksList.jsx';
import { BookFilter } from '';
import { Loader } from '../../cmps/Loader.jsx';

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
    };
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks() {
        booksService.query(this.state.filterBy).then((books) => {
            this.setState({ books });
        });
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks);
    };

    render() {
        const { books } = this.state;
        if (!books) return <Loader />
        return (
            <section className={`book-app`}>

                <BookFilter onSetFilter={this.onSetFilter} />

                <BooksList books={books} />
            </section>
        );
    }
}
