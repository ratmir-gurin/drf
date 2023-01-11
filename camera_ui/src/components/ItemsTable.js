import React, { useState } from "react";
import axios from "axios";
import { API_URL, API_URL_CREATE } from "../constants";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ItemsRow from "./ItemsRow";
import ModalDelete from "./Modals/ModalCreate";
import ModalCreate from "./Modals/ModalCreate";

class ItemsTable extends React.Component{
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);     
    }

    state = {
        items: [],
        IsModalOpenDelete: false,
        IsModalOpenCreate: false,
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
            // this.state.flag = false
            this.changeFlag();
            console.log("ItemTable -> changeFlag from componentDidUpdate", this.state.flag);
        }

    }  

    // changeFlag(){
    //     this.state.flag = !this.state.flag
    //     console.log("ItemTable -> changeFlag from function changeFlag", this.state.flag);
    // }

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


    deleteRow = id => {
        axios
        .delete(API_URL+id)
        .then(() => {
            console.log("deleted successfully!")
            this.toggleDelete()
            this.changeFlag()
        });
    }

    createRow(title, description){
        console.log("ItemTable -> createRow axios");
        console.log("title, description", title, description);
        axios
        .post(API_URL_CREATE, {
            title: title,
            description: description
        })
        .then(() => {
            console.log("created successfully!")
        });
    }   


    toggleDelete = () => {
            this.setState({
            IsModalOpenDelete: !this.state.IsModalOpenDelete,
            })
    }

    toggleCreate = () => {
            this.setState({
            IsModalOpenCreate: !this.state.IsModalOpenCreate,
            })
    }

    handleCallbackCreate = (title, description) =>{
        console.log("ItemTable -> handleCallbackCreate");
        console.log("title, description", title, description);
        this.setState( {title: title, description: description} )
        this.createRow(this.state.title, this.state.description)
    }


    render(){
        // const {title} = this.state.title;
        // const {description} = this.state.description;
        console.log("render ItemTable");
        const filterText = this.props.filterText;
        const rows = [];
        this.state.items.forEach(element => {
            if (element.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return true;
              }
            rows.push(<ItemsRow item={element} key = {element.id} onDeleteRow = {this.deleteRow}/>)            
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
            
            
            <Button color="primary" onClick={() => this.toggleCreate()} data-modal="modal-one" >Create</Button>
            <ModalCreate 
                IsModalOpenCreate = {this.state.IsModalOpenCreate} 
                close = {() => this.toggleCreate()} 
                title = {this.state.title} 
                description = {this.state.description}
                handleCreateRow = {this.createRow}
                handleChangeFlag = {() => this.changeFlag()}
                flag = {this.state.flag}
                />
           {/* {title}{description} */}

            </>
        );
    }
}

export default ItemsTable;