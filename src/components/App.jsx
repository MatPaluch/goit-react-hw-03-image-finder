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
    };
  }

  fetchImages = async (pag, keyWord) => {
    const params = new URLSearchParams({
      key: "43605256-eead80bfe3e75f279f48bfba2",
      image_type: "photo",
      orientation: "horizontal",
      page: pag,
      per_page: 12,
      q: keyWord,
    });

    return await axios.get(`https://pixabay.com/api/?${params}`).finally(() => {
      this.setState({ isLoading: false });
    });
  };

  handleSearch = async (ev) => {
    ev.preventDefault();
    this.setState({
      isLoading: true,
    });

    const word = ev.target.elements.inputSearch.value;
    const response = await this.fetchImages(1, word);

    this.setState({
      data: response.data.hits,
      word: word,
      page: 2,
    });
  };

  handleFetch = async (ev) => {
    ev.preventDefault();
    this.setState({
      isLoading: true,
    });
    console.log(this.state.page);
    const response = await this.fetchImages(2, this.state.word);
    this.setState((prevState) => ({
      data: [...prevState.data, ...response.data.hits],
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
  };

  render() {
    return (
      <>
        <div className="App">
          <Searchbar option={this.handleSearch} />
          {this.state.data && (
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
