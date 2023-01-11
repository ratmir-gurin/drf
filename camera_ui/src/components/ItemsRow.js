import React from "react";
import { Table, Button } from "reactstrap";

class ItemsRow extends React.Component{
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
      }

      
    deleteRow(e){
        this.props.onDeleteRow(e);
    }


    render(){
        console.log("render ItemRow");
        const item = this.props.item;
        return(
           <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td> <Button color="secondary">edit</Button>{' '}
                <Button color="danger" onClick={() => {this.deleteRow(item.id)}}>delete</Button></td>
            </tr>
            
        );
    }
}


export default ItemsRow;