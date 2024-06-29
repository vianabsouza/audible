function ChapterSelector(props) {
  return (
    <button className="seletor">
      <i className="bi bi-list-task"></i>
      <p>{`Capítulo ${props.currentChapter}`}</p>
    </button>
  )
}

export default ChapterSelector;