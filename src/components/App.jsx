import { Component } from "react";
import axios from "axios";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 2,
      isLoading: false,
    };
  }

  searchFunc = (ev) => {
    ev.preventDefault();
    const word = ev.target.elements.inputSearch.value;
    this.fetchData(word, 1);
    this.setState({ isLoading: true });
  };

  async fetchData(keyWord, pag) {
    const response = await axios
      .get(
        `https://pixabay.com/api/?key=43605256-eead80bfe3e75f279f48bfba2&image_type=photo&orientation=horizontal&page=${pag}&per_page=12&q=${keyWord}`,
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
    this.setState({ data: response.data.hits, word: keyWord });
  }

  handleFetch = (ev) => {
    ev.preventDefault();
    this.fetchDataButton(this.state.word, this.state.page);
    this.setState({ isLoading: true });
  };

  async fetchDataButton(keyWord, pag) {
    const response = await axios
      .get(
        `https://pixabay.com/api/?key=43605256-eead80bfe3e75f279f48bfba2&image_type=photo&orientation=horizontal&page=${pag}&per_page=12&q=${keyWord}`,
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
    this.setState((prevState) => ({
      data: [...prevState.data, ...response.data.hits],
      page: prevState.page + 1,
    }));
  }

  render() {
    return (
      <>
        <div className="App">
          <Searchbar option={this.searchFunc} />
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

export default App;
