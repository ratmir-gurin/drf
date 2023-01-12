import React, { useState } from "react";
import axios from "axios";
import { API_URL, API_URL_CREATE } from "../constants";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ItemsRow from "./ItemsRow";
import ModalEdit from "./Modals/ModalEdit";
import ModalCreate from "./Modals/ModalCreate";

class ItemsTable extends React.Component{
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
        this.postRow = this.postRow.bind(this);
        this.putRow = this.putRow.bind(this);
        // this.togglePut = this.togglePut.bind(this);
        // this.changeFlag = this.changeFlag.bind(this);          
    }

    state = {
        items: [],
        IsModalOpenDelete: false,
        IsModalOpenPost: false,
        IsModalOpenPut: false,
        id: "",
        title: "",
        description: "",
        flag: false,
      };
 

    componentDidMount(){
        this.getRows()
    }   

    componentDidUpdate(){
        console.log("ItemTable -> changeFlag from componentDidUpdate", this.state.flag);
        if (this.state.flag) {
            this.getRows()
            this.changeFlag();
            console.log("ItemTable -> changeFlag from componentDidUpdate if_block", this.state.flag);
        }
        console.log("ItemTable -> changeFlag from componentDidUpdate after_if_block", this.state.flag);
    }  

    changeFlag = () => {
        this.setState({
            flag: !this.state.flag,
        })
}


    getRows = () => {
        axios
        .get(API_URL)
        .then(res => {
            const items = res.data;
            this.setState({ items });
        });
    }   

    // Delete
    deleteRow(id){
        axios
        .delete(API_URL+id)
        .then(() => {
            console.log("deleted successfully!")
            this.toggleDelete()
            this.changeFlag()
        });
    }

    toggleDelete = () => {
        this.setState({
        IsModalOpenDelete: !this.state.IsModalOpenDelete,
        })
    }


    // Create
    postRow(title, description){
        console.log("ItemTable -> postRow axios");
        console.log("title, description", title, description);
        axios
        .post(API_URL_CREATE, {
            title: title,
            description: description
        })
        .then(() => {
            this.changeFlag()
            this.togglePost()
            console.log("created successfully!")
        });
    }
 
    togglePost = () => {
        this.setState({
        IsModalOpenPost: !this.state.IsModalOpenPost,
        })
    }



    // handleCallbackCreate = (title, description) =>{
    //     console.log("ItemTable -> handleCallbackCreate");
    //     console.log("title, description", title, description);
    //     this.setState( {title: title, description: description} )
    //     this.postRow(this.state.title, this.state.description)
    // }


    // Put (Edit)
    togglePut = (id) => {
        // console.log("togglePut item.id", id)
        // console.log("IsModalOpenPut", this.state.IsModalOpenPut)
        this.setState({
        IsModalOpenPut: !this.state.IsModalOpenPut,
        id: id,
        // // title: title,
        // description: description,
        })
        // Modify State Directly
        // this.state.title = title;
        // console.log(" this.state.id",  this.state.id)
        // console.log(" this.state.title",  this.state.title)
        // console.log(" this.state.description",  this.state.description)
    }

    // handleCallbackPut = (id, title, description) =>{
    //     console.log("ItemTable -> handleCallbackCreate");
    //     console.log("id, title, description", id, title, description);
    //     // this.setState( {title: title, description: description} )
    //     this.putRow(id, title, description)
    // }



    putRow(id, title, description){
        console.log("putRow");
        // console.log("title, description", title, description);
        const api = API_URL+id+"/"
        axios
        .put(api, {
            title: title,
            description: description
        })
        .then(() => {
            this.changeFlag()
            this.togglePut()
            console.log("PUT successfully!")
        });
    }



    render(){
        console.log("render ItemTable");
        const filterText = this.props.filterText;
        const rows = [];
        this.state.items.forEach(element => {
            if (element.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return true;
              }
            rows.push(<ItemsRow item={element} key={element.id} onDeleteRow={this.deleteRow} onPutRow={this.putRow} onTogglePut={this.togglePut}/>
            
            
            
            )            
        });

        

        return(

            <><Table striped hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>EDIT / DELETE</th>
                    </tr>
                </thead>
                <tbody>{rows}
                </tbody>
            </Table>


            <Modal isOpen={this.state.IsModalOpenDelete} toggle={() => this.toggleDelete()}>
                <ModalHeader toggle={() => this.toggleDelete()}>Delete Notification</ModalHeader>
                <ModalBody>
                <p>Item was deleted.</p>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => this.toggleDelete()}>Ok</Button>
                </ModalFooter>
            </Modal>
            
            
            <Button color="primary" onClick={() => this.togglePost()} data-modal="modal-one" >Create</Button>
            <ModalCreate 
                IsModalOpenPost = {this.state.IsModalOpenPost} 
                close = {() => this.togglePost()} 
                title = {this.state.title} 
                description = {this.state.description}
                handleCreateRow = {this.postRow}
            />


            <ModalEdit 
                IsModalOpenPut = {this.state.IsModalOpenPut}
                handleTogglePut = {() => this.togglePut()} 
                title = {this.props.item_row} 
                // description = {item.description}
                id_edit = {this.state.id}
                // title_edit = {this.state.title}
                // description_id = {this.state.description}
                handlePutRow = {this.putRow}
                // handleChangeFlag = {() => this.changeFlag()}
                // flag = {this.state.flag}
            />


            </>
        );
    }
}

export default ItemsTable;