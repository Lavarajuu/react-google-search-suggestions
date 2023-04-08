// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInputValue: ''}

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInputValue: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInputValue} = this.state
    const filterSuggestionsList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInputValue}
              />
            </div>
            <ul className="suggestions-container">
              {filterSuggestionsList.map(eachSuggestion => (
                <SuggestionItem
                  eachSuggestion={eachSuggestion}
                  key={eachSuggestion.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
