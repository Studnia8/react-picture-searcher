import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    // creation of reference - React component which replaces document.getElement query selector (DOM),
    // allows to reach data of individual element and pass as ref property
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  // calculate span number for css property grid-row-end
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 19);
    this.setState({ spans });
  };

  render() {
    // descructurization of images - instead of variable this.props.image put its next property, which will be in use.
    // this is made in order to avoid repeating the phrase "this.props.image"
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
