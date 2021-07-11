import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends Component {
  state = { images: [] };
  // get term state from Child after submit the search
  // make async, cause API req are async
  onSearchSubmit = async (term) => {
    // make API request using axios (see api->unsplash), not fetch
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar runWhenUserSubmits={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
