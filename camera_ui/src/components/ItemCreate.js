import React, { useState } from "react";
import axios from "axios";
import { API_URL, API_URL_CREATE } from "../constants";
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ItemsRow from "./ItemsRow";
import ModalDelete from "./Modals/ModalCreate";
import ModalCreate from "./Modals/ModalCreate";

class ItemCreate extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
        // items: [],
        IsModalOpen: false,
        title: "",
        description: "",
      };
 

    // createRow(){
    //     axios
    //     .post(API_URL_CREATE, {
    //         title: this.state.title,
    //         description: this.state.description
    //     })
    //     .then();
    // }   


    toggle = () => {
        this.setState({
        IsModalOpen: !this.state.IsModalOpen,
        })
      }

    render(){

        return(

            <>
            <Button color="primary" onClick={() => this.toggle()} data-modal="modal-one" >Create</Button>
            <ModalCreate IsModalOpen={this.state.IsModalOpen}/>
{/* 
            <Modal isOpen={this.state.IsModalOpen} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Creating a new element</ModalHeader>
                <ModalBody>
                <Label for="exampleEmail">Title</Label>
                <Input type="email" name="title" placeholder="Enter the Title..." value={this.state.title} />
                <Label for="exampleEmail">Description</Label>
                <Input type="email" name="description" placeholder="Enter the Description..." value={this.state.description} />
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.createRow}>
                Submit
                </Button>
                </ModalFooter>
            </Modal> */}
            
            </>
        );
    }
}

export default  ItemCreate;