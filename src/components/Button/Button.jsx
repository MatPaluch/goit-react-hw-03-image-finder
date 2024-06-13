import { Component } from "react";
import PropTypes from "prop-types";
import "../styles.css";

export default class Button extends Component {
  static propTypes = {
    buttonHandle: PropTypes.func,
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="Button"
          onClick={this.props.buttonHandle}>
          Load more
        </button>
      </>
    );
  }
}
