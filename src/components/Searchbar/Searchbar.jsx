import { Component } from "react";
import PropTypes from "prop-types";
import "../styles.css";

export default class Searchbar extends Component {
  static defaultProps = {};

  static propTypes = {
    option: PropTypes.func,
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.props.option}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="inputSearch"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
