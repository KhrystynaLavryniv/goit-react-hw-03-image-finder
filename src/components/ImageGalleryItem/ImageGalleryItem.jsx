import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryImg } from "./ImageGalleryItem.style";

const ImageGalleryItem = (image) => (
  <li
    onClick={() => {
      this.onClick(image.largeImageURL, image.tags);
    }}
  >
    <ImageGalleryImg
      src={image.webformatURL}
      alt={image.tags}
      onClick={this.onClick}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
};
