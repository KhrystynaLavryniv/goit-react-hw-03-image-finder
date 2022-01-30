import React from "react";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import imgApi from "./services/img-api";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/ImageGallery/ImageGallery.style";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    perPage: 12,
    images: [],
    error: null,
    hidden: false,
    loading: false,
    showModal: false,
    largeImage: "",
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
    console.log(searchQuery);
  };

  onClickBtn = () => {
    this.setState({ loading: true });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ images: [] });
      this.fetchImg();
    }
  }

  fetchImg = async () => {
    const { page, searchQuery } = this.state;

    this.setState({ loading: true });

    return await fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=24424361-80a045fa2441dce42755517a4&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));
        if (this.state.images.length === 0) {
          return toast.error("Sorry! Nothing was found for your query.");
        }
        console.log(data.hits);
        console.log(this.state.images);

        console.log(this.state.images.length);
        console.log(this.state.images.length / this.state.perPage);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  toggleModal = (largeImage, tags) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImage,
      tags,
    }));
  };

  render() {
    const { loading, images, perPage, showModal, largeImage, tags } =
      this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {loading && <Loader />}

        {images.length !== 0 && Number.isInteger(images.length / perPage) && (
          <Button type="button" onClick={this.fetchImg}>
            Load more
          </Button>
        )}
        {showModal && (
          <Modal onClick={this.toggleModal}>
            <img src={largeImage} alt={tags} />
          </Modal>
        )}
        <ToastContainer position="top-center" autoClose={2000} />
      </>
    );
  }
}
export default App;
