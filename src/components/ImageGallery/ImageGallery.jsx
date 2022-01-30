import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryList } from "./ImageGallery.style";
import {
  ImageGalleryCard,
  ImageGalleryImg,
} from "../ImageGalleryItem/ImageGalleryItem.style";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryList>
      {images.map(({ webformatURL, tags, largeImageURL }) => {
        const largePicture = () => onClick(largeImageURL);
        return (
          <ImageGalleryCard key={webformatURL}>
            <ImageGalleryImg
              src={webformatURL}
              alt={tags}
              onClick={largePicture}
              id={largeImageURL}
            />
          </ImageGalleryCard>
        );
      })}
    </ImageGalleryList>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
