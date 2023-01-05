import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CameraList from "./CameraList";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    cameras: []
  };

  componentDidMount() {
    this.resetState();
  }


  getCameras = () => {
    axios.get(API_URL).then(res => this.setState({ cameras: res.data }));
  };

  resetState = () => {
    this.getCameras();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CameraList
              cameras={this.state.cameras}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;