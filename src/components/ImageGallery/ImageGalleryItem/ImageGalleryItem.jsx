import { Component } from "react";
import PropTypes from "prop-types";
import "../../styles.css";
import Modal from "../../Modal/Modal";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
  };
  modal = () => {
    this.setState({ showModal: true });
  };
  modalOff = () => {
    this.setState({ showModal: false });
  };
  modalKey = (ev) => {
    if (ev.key === "Escape") {
      this.setState({ showModal: false });
    }
  };

  componentDidMount() {
    const height = document.body.scrollHeight;
    window.scrollTo({ top: height, behavior: "smooth" });
  }

  render() {
    return (
      <li className="ImageGalleryItem" tabIndex={0} onKeyDown={this.modalKey}>
        <img
          src={this.props.src}
          alt={this.props.alt}
          className="ImageGalleryItem-image"
          onClick={this.modal}
        />
        {this.state.showModal && (
          <Modal srcBig={this.props.alt} handleModal={this.modalOff}></Modal>
        )}
      </li>
    );
  }
}
