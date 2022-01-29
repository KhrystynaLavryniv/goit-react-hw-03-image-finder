import React from "react";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
    console.log(searchQuery);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastContainer position="top-center" autoClose={2000} />
      </>
    );
  }
}
export default App;
