// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateSearchInput} = props
  const {suggestion} = eachSuggestion

  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <div>
        <button type="button" className="arrow-button" onClick={onClickArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
