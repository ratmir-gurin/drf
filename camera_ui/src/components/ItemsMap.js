import React from "react";
import SearchBar from "./SearchBar";
import ItemsTable from "./ItemsTable";
import ItemCreate from "./ItemCreate";

class ItemsMap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);     
      
    }

    

    handleFilterTextChange(filterText){
        this.setState( {filterText: filterText} );
    }
      
    render(){
        console.log("render ItemMap");
        return(
            <div>
                <SearchBar filterText = {this.state.filterText} onFilterTextChange = {this.handleFilterTextChange}/>
                <ItemsTable filterText = {this.state.filterText}/>
            </div>
        )
    }
}

export default ItemsMap;