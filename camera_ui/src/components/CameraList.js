import React, { Component } from "react";
import { Table } from "reactstrap";
// import Timer from "./Timer";



class CameraList extends Component {
  render() {
    const cameras = this.props.cameras;
   
    // const eventCamera = (name) => {
    //   console.info("name", name);
    // }



    // cameras.sort( (a,b) => (a.description > b.description) ? 1:-1 );


    return (
      <Table dark striped>
        <thead>
          <tr >
            <th>ID</th>
            <th>title</th>
            <th>description</th>
            <th>counter</th>
          </tr>
        </thead>
        <tbody>
          {
            
            cameras.map(camera => (
              <tr key = {1}>
                <td>{camera.id}</td>
                <td>{camera.title}</td>
                <td>{camera.description}</td>
                {/* <td><Timer /></td> */}
              </tr>
            )
          )}

          
        </tbody>
      </Table>
    );
  }
}

export default CameraList;