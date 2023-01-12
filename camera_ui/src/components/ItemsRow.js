import React from "react";
import { Table, Button } from "reactstrap";

class ItemsRow extends React.Component{
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
        this.putRow = this.putRow.bind(this);
        this.togglePut = this.togglePut.bind(this);
      }

      
    deleteRow(e){
        this.props.onDeleteRow(e);
    }

    putRow(e){
        this.props.onPutRow(e);
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
                <Button color="danger" onClick={() => {this.deleteRow(item.id)}}>delete</Button></td>
            </tr>
            
        );
    }
}


export default ItemsRow;