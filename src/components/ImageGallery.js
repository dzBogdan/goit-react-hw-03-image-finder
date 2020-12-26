import React from 'react';
import './image-finder.moduls.css';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';

class ImageGallery extends React.Component{
    state={
      index: 0,
      loadModal:false
    }
  
    

    handleClick =()=>{
      this.setState({loadModal:!this.state.loadModal});
    }

    handleLoadModal=()=>{
    this.setState({loadModal:!this.state.loadModal})
  }

    handleFind=patch=>{
      const imageArr = this.props.images;
      for(let i=0;i<imageArr.length;i+=1){
        if(patch===imageArr[i].webformatURL){
          this.setState({index:i});
          return;
        }
      }
    }
     
    render(){
      const images = this.props.images;
      return (  
     <div>
      <ul className="ImageGallery" onClick={this.handleLoadModal}>
         {images.map(item=>(
             <ImageGalleryItem 
             image={item}
             onClick={this.handleFind}
             />
          ))}
      </ul>
      {this.state.loadModal && <Modal 
            images={images}
            index={this.state.index}
            onClick={ this.handleLoadModal}      
      />}
      </div>  
    );
  }
}

export default ImageGallery;