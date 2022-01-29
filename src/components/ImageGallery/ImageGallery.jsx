import React from "react";
import { Component } from "react";
import { toast } from "react-toastify";

import imgApi from "../../services/img-api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList, Button } from "./ImageGallery.style";
import Loader from "../Loader/Loader";

class ImageGallery extends Component {
  state = {
    searchQuery: "",
    page: 1,
    perPage: 12,
    images: [],
    error: null,
    hidden: false,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ loading: true });
      imgApi(this.props.searchQuery, 1)
        .then((images) => {
          if (images.length === 0) {
            return toast.error("Sorry! Nothing was found for your query.");
          }
          this.setState((prev) => ({
            images,
            hidden: true,
            page: prev.page + 1,
          }));
          if (images.length < 12) {
            this.setState((prev) => ({
              hidden: false,
              page: prev.page + 1,
              loading: true,
            }));
          }
          console.log(images.length);
        })
        .catch((error) => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onClickBtn = () => {
    this.setState({ loading: true });
    imgApi(this.props.searchQuery, this.state.page)
      .then((images) => {
        this.setState((prev) => ({
          images: [...prev.images, ...images],
          hidden: true,
          page: prev.page + 1,
          loading: true,
        }));
        if (images.length < 12) {
          this.setState((prev) => ({
            hidden: false,
            page: prev.page + 1,
            loading: true,
          }));
        }
        console.log(images.length);
      })
      .catch((error) => console.log(error))
      .finally(
        () => this.setState({ loading: false }),
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        })
      );
  };

  render() {
    const { images, loading, hidden } = this.state;
    return (
      <div>
        {loading && <Loader />}

        <ImageGalleryList>
          {images && <ImageGalleryItem images={images} />}
        </ImageGalleryList>
        {images.length !== 0 && hidden && (
          <Button type="button" onClick={this.onClickBtn}>
            Load more
          </Button>
        )}
      </div>
    );
  }
}
export default ImageGallery;
