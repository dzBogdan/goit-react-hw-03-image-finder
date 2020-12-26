import React from 'react';
import './image-finder.moduls.css';

class ImageGalleryItem extends React.Component{
    handleOnClic=images=>{
       this.props.onClick(images);
    }

    render(){
      const patch = this.props.image.webformatURL;
      const id = this.props.image.id;
     return(
      <>
      <li className="ImageGalleryItem" key={id} onClick={()=>this.handleOnClic(patch)}>
         <img src={patch} alt="" className="ImageGalleryItem-image" />
      </li>
      </>  
    );
    }
}

export default ImageGalleryItem;