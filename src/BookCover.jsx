function BookCover (props) {
    return <img className="book-cover" src={props.bookCover} alt={props.alternativeText} />
}

export default BookCover;