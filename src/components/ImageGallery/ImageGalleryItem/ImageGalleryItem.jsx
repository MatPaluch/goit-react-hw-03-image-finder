import { Component } from "react";
import PropTypes from "prop-types";
import "../../styles.css";

export default class ImageGalleryItem extends Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        <img src={this.props.src} alt="" className="ImageGalleryItem-image" />
      </li>
    );
  }
}
