import './App.css'
import BookCover from './BookCover';
import brasCubasBookCover from './assets/bras-cubas-book-cover.jpeg'

function App() {
  const bookInfo = {
    name: 'Memórias Póstumas de Brás Cubas',
    author: "Machado de Assis",
    totalChapters: 2,
    bookCover: brasCubasBookCover,
    alternativeText: 'Capa do livro Memórias Póstumas de Brás Cubas'
  }

  return (
    <>
      <BookCover bookCover={bookInfo.bookCover} alternativeText={bookInfo.alternativeText}/>
    </>
  )
}

export default App
