import React from 'react';
import './image-finder.moduls.css';

class Loadmore extends React.Component{
    
    
  render(){
      return(
  <div>    
       <button type="submit" className="Button" onClick={this.props.onClick}>
        Load more
      </button>
  
      
   
</div>
      )
  }   
  
  }
  
  export default Loadmore;