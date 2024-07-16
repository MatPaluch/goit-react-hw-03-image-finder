import { Component } from "react";
import axios from "axios";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
      word: "",
      page: 1,
    };
  }

  fetchImages = async (pag, keyWord) => {
    this.setState({ isLoading: true });
    const params = new URLSearchParams({
      key: "43605256-eead80bfe3e75f279f48bfba2",
      image_type: "photo",
      orientation: "horizontal",
      page: pag,
      per_page: 12,
      q: keyWord,
    });

    try {
      const response = await axios.get(`https://pixabay.com/api/?${params}`);
      return response.data.hits;
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = async (ev) => {
    ev.preventDefault();

    const word = ev.target.elements.inputSearch.value;
    const data = await this.fetchImages(1, word);

    this.setState({
      data: data,
      word: word,
      page: 2,
    });
  };

  handleFetch = async (ev) => {
    ev.preventDefault();

    const data = await this.fetchImages(this.state.page, this.state.word);

    this.setState((prevState) => ({
      data: [...prevState.data, ...data],
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <div className="App">
          <Searchbar option={this.handleSearch} />
          {this.state.data.length > 0 && (
            <>
              <ImageGallery data={this.state.data} />
              <Button buttonHandle={this.handleFetch} />
            </>
          )}
          {this.state.isLoading && <Loader />}
        </div>
      </>
    );
  }
}
