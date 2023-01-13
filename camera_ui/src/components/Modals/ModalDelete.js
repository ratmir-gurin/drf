import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalDelete extends React.Component{

    getData = (e) => {
        e.preventDefault();
        this.props.handleDeleteRow(this.props.id_delete);
    }

    render(){ 
        console.log("render ModalEdit");
        return(
            <><Modal isOpen={this.props.IsModalOpenDelete} toggle={this.props.handleToggleDelete} >
            <form>
                <ModalHeader toggle={this.props.handleToggleDelete}>Delete Notification new</ModalHeader>
                <ModalBody>
                <p>Item was deleted.</p>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => this.props.handleToggleDelete()}>Ok</Button>
                </ModalFooter>
            </form>
            </Modal></>
        );
    }
}

export default ModalDelete;