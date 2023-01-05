import React, { Component } from "react";
import { Table } from "reactstrap";

class CameraList extends Component {
  render() {
    const cameras = this.props.cameras;
    return (
      <Table dark striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {
            cameras.map(camera => (
              <tr>
                <td>{camera.id}</td>
                <td>{camera.title}</td>
                <td>{camera.description}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    );
  }
}

export default CameraList;