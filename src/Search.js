import React from "react";
import apiKey from './config.js';
import Photos from './Photos'

class Search extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          searchTerm: ''
        };
      }

    handleSubmit = (event)=>{
        event.preventDefault();
        let searchTerm = document.getElementById('flikr-search').value;
        this.setState({searchTerm: searchTerm});
        document.getElementById('flikr-search').value = '';
    }

    handleKeyPress = (event)=>{
        if(event.keyCode === 13){
            this.handleSubmit();
        }
    }
    render(){
        console.log(this.state.searchTerm)
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input id="flikr-search" type="text" name="search" onKeyPress={this.handleKeyPress}></input>
                    <button type="submit">Search Flickr!</button>
                </form>
                <Photos photo={this.state.searchTerm} api_key={apiKey}/>
            </div>
        )
    }
}

export default Search;