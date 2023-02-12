import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterCounter from './component/characterCounter'
import './App.css'

// Replace your code here
class App extends Component {
  state = {word: '', newArray: []}

  onChangeInput = event => {
    this.setState({word: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {word} = this.state
    const newWord = {
      id: uuidv4(),
      word,
    }

    this.setState(prevState => ({
      newArray: [...prevState.newArray, newWord],
      word: '',
    }))
  }

  render() {
    const {newArray, word} = this.state
    console.log(newArray)
    return (
      <div className="mainContainer">
        <div className="outputContainer">
          <div className="outputHeadingContainer">
            <h1 className="outputHeading">
              Count the characters like a Boss...
            </h1>
          </div>
          {newArray.length > 0 ? (
            <ul className="list-container">
              {newArray.map(each => (
                <CharacterCounter each={each} key={each.id} />
              ))}
            </ul>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            </div>
          )}
        </div>
        <div className="inputMainContainer">
          <h1 className="inputHeading">Character Counter</h1>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-bar"
              onChange={this.onChangeInput}
              value={word}
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
