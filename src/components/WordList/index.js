import './index.css'

const WordList = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <li>
      <p className="word-name">
        {word} : {word.length}
      </p>
    </li>
  )
}

export default WordList
