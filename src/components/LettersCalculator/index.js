import {Component} from 'react'
import './index.css'
class LettersCalculator extends Component {
  state = {
    inputPharse: '',
  }
  onChangeInputPharse = event => {
    const {value} = event.target
    this.setState({inputPharse: value})
  }
  render() {
    const {inputPharse} = this.state
    return (
      <div className="app-container">
        <div className="letters-caluculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-pharse-container">
              <label className="label" htmlFor="pharseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="pharseText"
                onChange={this.onChangeInputPharse}
                placeHolder="Enter the phrase"
                type="text"
                value={inputPharse}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPharse.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
