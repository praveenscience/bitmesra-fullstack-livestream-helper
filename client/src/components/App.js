import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Card from "./Bootstrap/Card";
import Data from "../constants/MockData.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header justify-content-center">
          LiveStream Helper
        </Header>
        <div className="container-fluid">
          <div className="row">
            {Data.map((str, key) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={key}>
                <Card
                  Image={
                    str.Designs.Thumbnail
                      ? `https://i.imgur.com/${str.Designs.Thumbnail}l.png`
                      : "https://i.imgur.com/TREuBIcl.png"
                  }
                  ImgAlign="top"
                  Header={str.Title}
                >
                  <Card
                    Header="YouTube"
                    TextHeader={true}
                    Title={str.YouTube.Title}
                  >
                    <p className="card-text YouTube-Desc">
                      {str.YouTube.Description
                        ? JSON.parse(`"${str.YouTube.Description}"`)
                        : ""}
                    </p>
                  </Card>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
