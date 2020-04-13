import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Gallery extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: "ballons",
        per_page: 5
      },
      headers: {
        Authorization: 'Client-ID cad06ba4eca06b9ae2d390e09fcf35680c9b598fbe24e982a7c526c08f5d6052'
      }
    });

    this.setState({
      photos: response.data.results
    });
  };

  renderPhotoList = () => {
    return this.state.photos.map(photo => {
      return (
        <div
          className="item"
          key={photo.id}
          style={{cursor: "pointer"}}
        >
          <Link to={`/gallery/${photo.id}`}>
            <img
              className="ui image fluid"
              src={photo.urls.full}
              alt={photo.alt_description}
            />
          </Link>
        </div>
      )
    });
  };

  render() {
    if (this.state.photos.length === 0) {
      return <div className="ui segment">Loading...</div>
    }

    return (
      <div className="ui segment">
        <div className="ui list">
          {this.renderPhotoList()}
        </div>
      </div>
    )
  }
}

export default Gallery;
