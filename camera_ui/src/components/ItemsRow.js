import React from "react";
import { Table, Button } from "reactstrap";

class ItemsRow extends React.Component{
    constructor(props) {
        super(props);
        this.togglePut = this.togglePut.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
      }

    toggleDelete(e){
        this.props.onDeleteRow(e);
    }
    

    togglePut(e){
        this.props.onTogglePut(e);
    }
    

    render(){
        console.log("render ItemRow");
        const item = this.props.item;
        return(
           <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td> <Button color="secondary" onClick={() => {this.togglePut(item.id)}}>edit</Button>{' '}
                <Button color="danger" onClick={() => {this.toggleDelete(item.id)}}>delete</Button></td>
            </tr>
            
        );
    }
}


export default ItemsRow;