import { Component } from "react";
import PropTypes from "prop-types";
import "../styles.css";

export default class Modal extends Component {
  static propTypes = {
    handleModal: PropTypes.func,
    srcBig: PropTypes.string,
  };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.srcBig} alt="" onClick={this.props.handleKey} />
        </div>
      </div>
    );
  }
}
