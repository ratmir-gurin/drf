import React, { useState } from "react";
import axios from "axios";
import { API_URL, API_URL_CREATE } from "../constants";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ItemsRow from "./ItemsRow";
import ModalEdit from "./Modals/ModalEdit";
import ModalCreate from "./Modals/ModalCreate";
import ModalDelete from "./Modals/ModalDelete";

class ItemsTable extends React.Component{
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
        this.postRow = this.postRow.bind(this);
        this.putRow = this.putRow.bind(this);
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
        if (this.state.flag) {
            this.getRows()
            this.changeFlag();
        }
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


    // POST (Create)
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


    // Put (Edit)
    togglePut = (id) => {
        this.setState({
        IsModalOpenPut: !this.state.IsModalOpenPut,
        id: id,
        })
    }


    putRow(id, title, description){
        console.log("putRow");
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


            <ModalDelete 
                IsModalOpenDelete = {this.state.IsModalOpenDelete}
                handleToggleDelete = {() => this.toggleDelete()} 
                title = {this.props.item_row} 
                id_delete = {this.state.id}
                handleDeleteRow = {this.deleteRow}
            />

            
            <Button color="primary" onClick={() => this.togglePost()} data-modal="modal-one" >Create</Button>
            <ModalCreate 
                IsModalOpenPost = {this.state.IsModalOpenPost} 
                handleTogglePut = {() => this.togglePost()} 
                title = {this.state.title} 
                description = {this.state.description}
                handleCreateRow = {this.postRow}
                
            />


            <ModalEdit 
                IsModalOpenPut = {this.state.IsModalOpenPut}
                handleTogglePut = {() => this.togglePut()} 
                title = {this.props.item_row} 
                id_edit = {this.state.id}
                handlePutRow = {this.putRow}
            />


            </>
        );
    }
}

export default ItemsTable;