import React from "react";
import { Button } from "reactstrap";
import ModalCreate from "./Modals/ModalCreate";

class ItemCreate extends React.Component{

    state = {
        IsModalOpen: false,
        title: "",
        description: "",
      };
 


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
            
            </>
        );
    }
}

export default  ItemCreate;