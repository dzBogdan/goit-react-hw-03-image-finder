import logo from './logo.svg';
import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Seatchbar from './components/Searchbar';
import Loadmore from './components/Loadmore';

class App extends React.Component{
  state={
    images:[],
    find:'',
    pagecount:1,
   
  }; 


  componentDidMount(){
   
    const findimage = this.state.find.toLowerCase();
    if (this.state.find !== '') {
      fetch(`https://pixabay.com/api/?q=${findimage}&page=${this.state.pagecount}&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).
        then(images => this.setState({ images: images.hits }));
    }
        
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.find === '') {
      return;
    }

    if (prevState.find !== this.state.find) {
    const findimage = this.state.find.toLowerCase();
    fetch(`https://pixabay.com/api/?q=${findimage}&page=${this.state.pagecount}&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12`).then(res=>res.json()).
    then(images=>this.setState({images:images.hits}));
    }


    if (this.state.pagecount === 1) {
      return;
      
    }
   

    if (prevState.pagecount !== this.state.pagecount) {
    const findimage = this.state.find.toLowerCase();
    fetch(`https://pixabay.com/api/?q=${findimage}&page=${this.state.pagecount}&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12`).then(res=>res.json()).
    then(images=>this.setState(prevState=>({images:[...prevState.images,...images.hits]})));
    
    }
  }

  handleInputFilterChenge = InputFind =>{
    this.setState({find: InputFind});
    this.setState({pagecount:1});
  }

  handleAddPage = ()=>{
    this.setState(prevState=>({pagecount:prevState.pagecount+1}));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    
  }
 
  


 render(){
  
  return (
    <div>
    <Seatchbar onChenge = {this.handleInputFilterChenge}/>
      <br />
      
    <ImageGallery images={this.state.images} 
    loadModal={this.state.loadModal}
        onClick={this.handleLoadModal} />
     <br />
    <Loadmore onClick={this.handleAddPage} />
   
    </div>
  )
 }
}

export default App;
