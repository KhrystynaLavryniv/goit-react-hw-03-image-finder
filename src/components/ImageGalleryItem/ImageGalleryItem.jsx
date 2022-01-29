import React from "react";
import { Component } from "react";

import Modal from "../Modal/Modal";
import { ImageGalleryCard, ImageGalleryImg } from "./ImageGalleryItem.style";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImage: "",
  };

  toggleModal = (largeImageURL) => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
      largeImage: largeImageURL,
    }));
  };

  render() {
    return (
      <>
        {this.props.images.map((image) => {
          const largePicture = () => this.toggleModal(image.largeImageURL);
          return (
            <ImageGalleryCard key={image.webformatURL}>
              <ImageGalleryImg
                src={image.webformatURL}
                alt={image.tags}
                onClick={largePicture}
                id={image.largeImageURL}
              />
            </ImageGalleryCard>
          );
        })}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={this.state.largeImage} />
        )}
      </>
    );
  }
}
export default ImageGalleryItem;
