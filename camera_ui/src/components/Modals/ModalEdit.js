import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalEdit extends React.Component{

    getData = (e) => {
        e.preventDefault();
        this.props.handlePutRow(this.props.id_edit, e.target.title.value, e.target.description.value);
      }

      render(){ 
        console.log("render ModalEdit");
        return(
            <><Modal isOpen={this.props.IsModalOpenPut} toggle={this.props.handleTogglePut} >
            <form onSubmit={this.getData}>
                <ModalHeader toggle={this.props.handleTogglePut}>Edit the element</ModalHeader>
                <ModalBody>
                    <div className="form-outline"></div>
                        <label htmlFor="title">Title</label> <br></br>
                        <input type="text" 
                        id="title"
                        name="title"
                        className="form-control" 
                        placeholder="Please enter NEW Title..." 
                        /><br />

                        <label htmlFor="description">Description</label>
                        <input type="text" 
                        id="description"
                        name="description"
                        className="form-control" 
                        placeholder="Please enter NEW Description..."
                        /><br></br>
                    <div/>
                </ModalBody>
                <ModalFooter>
                <Button color="primary">Submit</Button>
                </ModalFooter>
            </form>
            </Modal></>
        );
    }
}

export default ModalEdit;