import React, { useState } from "react";
// import axios from "axios";
// import { API_URL, API_URL_CREATE } from "../../constants";
import { Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
// import ItemCreate from "../ItemCreate";

class ModalCreate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          description: "",
        };

        // this.toggle = this.toggle.bind(this);
    }

    // state = {
    //     IsModalOpen: false,
    //     title: "",
    //     description: "",
    //   };
 
    // const title = this,

    getText = (e) => {
        e.preventDefault();
        console.log(e.target.title.value, e.target.description.value);
        this.props.handleCreateRow(e.target.title.value, e.target.description.value);
        console.log("ModalCreate -> getText");
        console.log("e.target.title.value, e.target.description.value", e.target.title.value, e.target.description.value);
        this.props.handleChangeFlag();
      }

    
      


      render(){ 
        console.log("render ModalCreate");
        return(

            <>
            <Modal isOpen={this.props.IsModalOpenCreate} toggle={this.props.close} >
                <ModalHeader toggle={this.props.close}>Creating a new element</ModalHeader>
                <ModalBody>
                <form onSubmit={this.getText}>
                    <div className="form-outline"></div>
                        <label htmlFor="title">Title</label> <br></br>
                        <input type="text" 
                        id="title"
                        name="title"
                        className="form-control" 
                        placeholder="Please enter Title..." 
                        // value={this.state.title}  
                        // onChange={this.getText}

                        /><br />

                        <label htmlFor="description">Description</label>
                        <input type="text" 
                        id="description"
                        name="description"
                        className="form-control" 
                        placeholder="Please enter Description..." 
                        // value={this.state.description}  
                        // onChange={this.getText}

                        /><br></br>
                    <div/>
                    <div><Button color="primary" >Submit</Button></div>
                    
                </form>
                </ModalBody>
                {/* <ModalFooter>
                <Button color="primary" onChange={this.getText}>
                Submit
                </Button>
                </ModalFooter> */}
            </Modal>
            
            </>
        );
    }
}

export default ModalCreate;