import React from "react";

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    
    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }

    render(){
        console.log("render SearchBar");
        return(
        <form>
        <div className="form-outline"></div>
            <input type="search" 
            className="form-control" 
            placeholder="Search by title..." 
            value={this.props.filterText}  
            onChange={this.handleFilterTextChange}/>
        <div/>
        </form>
        )
    }
}

export default SearchBar;