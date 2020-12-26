import React from 'react';
import './image-finder.moduls.css';

class Searchbar extends React.Component{
  state={
      find:'',
  } 

  handleInputFilterChenge = event =>{
    this.setState({find: event.currentTarget.value});
  }

  heandleOnClick=event=>{
    event.preventDefault();
    this.props.onChenge(this.state.find);
    
  }


  
render(){
    return(
    <header className="Searchbar">
      <form className="SearchForm">
       <button type="submit" className="SearchForm-button" onClick={this.heandleOnClick}>
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange= {this.handleInputFilterChenge}
    />
  </form>
</header>
    )
}   

}

export default Searchbar