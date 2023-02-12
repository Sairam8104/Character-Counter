import './index.css'

const CharacterCounter = props => {
  const {each} = props
  const {word} = each
  console.log(word)
  const lengthOf = word.length
  return (
    <li>
      <p className="text">
        {word} : {lengthOf}
      </p>
    </li>
  )
}

export default CharacterCounter
