import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class ModalCreate extends React.Component{

    getText = (e) => {
        e.preventDefault();
        this.props.handleCreateRow(e.target.title.value, e.target.description.value);
      }

    render(){ 
        return(

            <>
            <Modal isOpen={this.props.IsModalOpenPost} toggle={this.props.handleTogglePut} >
            <form onSubmit={this.getText}>
            <ModalHeader toggle={this.props.handleTogglePut}>Creating a new element</ModalHeader>
                <ModalBody>
                    <div className="form-outline"></div>
                        <label htmlFor="title">Title</label> <br></br>
                        <input type="text" 
                        id="title"
                        name="title"
                        className="form-control" 
                        placeholder="Please enter Title..." 
                        /><br />

                        <label htmlFor="description">Description</label>
                        <input type="text" 
                        id="description"
                        name="description"
                        className="form-control" 
                        placeholder="Please enter Description..." 
                        /><br></br>
                    <div/>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" >Submit</Button>
                </ModalFooter>
            </form>
            </Modal>
            
            </>
        );
    }
}

export default ModalCreate;