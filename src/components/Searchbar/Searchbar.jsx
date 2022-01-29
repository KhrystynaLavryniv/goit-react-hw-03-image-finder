import React from "react";
import { Component } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { ImSearch } from "react-icons/im";

import {
  Searchbox,
  ButtonSearch,
  SearchInput,
  SearchForm,
} from "./Searchbar.style";

export default class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleNameChange = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === "") {
      return toast("Please, fill in the field of search");
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <Searchbox>
        <SearchForm onSubmit={this.handleSubmit}>
          <ButtonSearch type="submit" aria-label="search">
            <ImSearch />
          </ButtonSearch>
          <SearchInput
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbox>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
