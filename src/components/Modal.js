import React from 'react';
import './image-finder.moduls.css';


class Modal extends React.Component{
    componentDidMount() { 
        
        window.addEventListener('keydown',this.handleKeyDowne);

    }

    componentWillUnmount() { 
        window.removeEventListener('keydown',this.handleKeyDowne)
    };

    handleKeyDowne = e => {
       
        if (e.code === 'Escape') {       
         this.props.onClick();
     }
    }
    
    render(){
        const images = this.props.images;
        const index = this.props.index;
        return (
            <div className="Overlay">
              <div className="Modal">
                 <img src={images[index].largeImageURL} alt="" />
             </div>
            </div>
        )
    }
}

export default Modal;