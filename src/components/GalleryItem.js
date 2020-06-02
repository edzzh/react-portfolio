import React from "react";
import axios from "axios";
import CommentSection from "./CommentSection";

class GalleryItem extends React.Component {
  state = {
    photoData: null
  };

  componentDidMount() {
    this.fetchPhoto();
  }

  fetchPhoto = async () => {
    const photoId = this.props.match.params.id;
    const photo = await axios.get(
      `https://api.unsplash.com/photos/${photoId}`,
      {
        headers: {
          Authorization: 'Client-ID cad06ba4eca06b9ae2d390e09fcf35680c9b598fbe24e982a7c526c08f5d6052'
        }
      }
    );

    this.setState({
      photoData: photo.data
    });
  };

  render() {
    if (this.state.photoData === null) {
      return <div className="ui segment">Fetching photo...</div>
    }

    return (
      <div className="ui raised very padded text container segment" style={{marginBottom: "20px"}}>
        <h2 className="ui header centered">
          {(this.state.photoData.description !== null) ? this.state.photoData.description.toUpperCase() : "NO TITLE"}
        </h2>
        <img className="ui image centered large"
             src={this.state.photoData.urls.full}
             alt={this.state.photoData.alt_description}
        />
        <CommentSection photo={this.state.photoData}/>
      </div>
    )
  };
}

export default GalleryItem;
