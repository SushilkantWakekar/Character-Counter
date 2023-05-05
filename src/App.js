import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import WordList from './components/WordList'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputString: '',
    wordList: [],
  }

  onChangeButton = event => {
    this.setState({inputString: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {inputString} = this.state
    const addedItem = {
      id: uuidv4(),
      word: inputString,
    }

    this.setState(prevState => ({
      wordList: [...prevState.wordList, addedItem],
      inputString: '',
    }))
  }

  render() {
    const {inputString, wordList} = this.state
    return (
      <div className="app-container">
        <div className="container-1">
          <div className="quote-container">
            <h1 className="heading1">Count the characters like a Boss...</h1>
          </div>
          <ul className="wordlist-container">
            {wordList.length === 0 ? (
              <img
                className="no-input"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              wordList.map(eachWord => (
                <WordList key={eachWord.id} wordDetails={eachWord} />
              ))
            )}
          </ul>
        </div>
        <div className="container-2">
          <h1 className="heading2">Character Counter</h1>
          <form className="input-container">
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-box"
              value={inputString}
              onChange={this.onChangeButton}
            />
            <button
              className="button"
              type="button"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
