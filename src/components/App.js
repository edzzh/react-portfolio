import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Gallery from "./Gallery";
import GalleryItem from "./GalleryItem";
import Home from "./Home";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/gallery" exact component={Gallery}/>
            <Route path="/gallery/:id" exact component={GalleryItem}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
