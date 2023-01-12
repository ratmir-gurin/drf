import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalDelete extends React.Component{

    getData = (e) => {
        e.preventDefault();
        this.props.handlePutRow(this.props.id_edit, e.target.title.value, e.target.description.value);
        console.log("ModalEdit -> getData");
        console.log("e.target.title.value, e.target.description.value", e.target.title.value, e.target.description.value);
    }

    render(){ 
        console.log("render ModalEdit");
        return(
            <><Modal isOpen={this.props.IsModalOpenPut} toggle={this.props.handleTogglePut} >
            <form onSubmit={this.getData}>
                <ModalHeader toggle={this.props.handleTogglePut}>Delete Notification new</ModalHeader>
                <ModalBody>
                <p>Item was deleted.</p>
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