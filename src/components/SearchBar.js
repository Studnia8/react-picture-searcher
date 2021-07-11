import React, { Component } from "react";

class Search extends Component {
  // each time user change anything in input field event.target.value will update this
  // naming conversion = on + field type + kind of event

  // below is uncontrolled event
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  // + onChange={this.onInputChange} in input field

  // controlled event (with state in class)
  state = { term: "" };

  // 1. arrow function remove problem with this. call - current implementation
  // 2. other way you can leave old version, but invoke in <form/> onSubmit={()=>this.onFormSubmit()}
  // 3. other way i use binding method, for example: this.state=this.state.bind(this)
  onFormSubmit = (e) => {
    // preventing of resreshing the page after entering enter on keyboard
    e.preventDefault();
    this.props.runWhenUserSubmits(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              placeholder="Type your search"
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
