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
                  Extras={
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-info">
                        Progress
                      </li>
                      <li className="list-group-item">
                        <i
                          className={
                            "fa fa-" +
                            (str.DateTime ? "check-" : "") +
                            "square mr-1"
                          }
                        ></i>
                        Date and Time
                      </li>
                      <li className="list-group-item">
                        <i
                          className={
                            "fa fa-" +
                            (str.CoHosts.length > 0 ? "check-" : "") +
                            "square mr-1"
                          }
                        ></i>
                        Host / Co-Host
                      </li>
                      <li className="list-group-item">
                        <i
                          className={
                            "fa fa-" +
                            (str.Designs.Thumbnail ? "check-" : "") +
                            "square mr-1"
                          }
                        ></i>
                        Poster
                      </li>
                      <li className="list-group-item">
                        <i
                          className={
                            "fa fa-" +
                            (str.StreamURL ? "check-" : "") +
                            "square mr-1"
                          }
                        ></i>
                        YouTube Live Stream
                      </li>
                    </ul>
                  }
                >
                  {str.YouTube.Title && str.YouTube.Description && (
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
                  )}
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
