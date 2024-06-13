import { Component } from "react";
import PropTypes from "prop-types";
import "../styles.css";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    return (
      <ul className="ImageGallery">
        {this.props.data.map((elem) => {
          return <ImageGalleryItem src={elem.webformatURL} key={elem.id} />;
        })}
      </ul>
    );
  }
}
