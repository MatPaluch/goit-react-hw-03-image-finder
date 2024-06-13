import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import "../styles.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="LoaderCenter">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#3f51b5"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
