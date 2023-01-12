import React, { useState } from "react";
// import axios from "axios";
// import { API_URL, API_URL_CREATE } from "../../constants";
import { Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
// import ItemCreate from "../ItemCreate";

class ModalEdit extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     //   id: "",  
    //     //   title: "",
    //     //   description: "",
    //     };
    // }


    getData = (e) => {
        e.preventDefault();
        console.log("this.setState( {id: e.target.id, title: e.target.title.value, description: e.target.description.value})", e.target.title.value, e.target.description.value);
        // console.log(e.target.title.value, e.target.description.value);
        this.props.handlePutRow("398");
        // console.log("ModalCreate -> getText");
        // console.log("e.target.title.value, e.target.description.value", e.target.title.value, e.target.description.value);
        // this.props.handleChangeFlag();

        // this.setState( {
        //     // id: e.target.id, 
        //     title: e.target.title.value, 
        //     description: e.target.description.value})
        console.log("this.setState( {id: e.target.id, title: e.target.title.value, description: e.target.description.value})", e.target.title.value, e.target.description.value);
      }

    
      render(){ 
        console.log("render ModalEdit");
        return(

            <><Modal isOpen={this.props.IsModalOpenPut} toggle={this.props.handleTogglePut} >
                <ModalHeader toggle={this.props.handleTogglePut}>Edit the element</ModalHeader>
                <ModalBody>
                <form onSubmit={() => {this.getData()}}>
                    <div className="form-outline"></div>
                        <label htmlFor="title">Title</label> <br></br>
                        <input type="text" 
                        id={this.props.id}
                        name="title"
                        className="form-control" 
                        placeholder={this.props.title} 
                        // value={this.props.title}
                        /><br />

                        <label htmlFor="description">Description</label>
                        <input type="text" 
                        id="description"
                        name="description"
                        className="form-control" 
                        placeholder={this.props.description}
                        // value={this.props.description}
                        /><br></br>
                    <div/>
                    <div><Button color="primary" >Submit</Button></div>
                </form>
                </ModalBody>
            </Modal></>


        );
    }
}

export default ModalEdit;