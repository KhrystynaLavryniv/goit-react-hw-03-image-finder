import React, { Component } from "react";
import PropTypes from "prop-types";
import { Overlay, ModalWindow } from "./Modal.style";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose(evt);
    }
  };
  handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose(evt);
    }
  };
  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={this.props.image} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
