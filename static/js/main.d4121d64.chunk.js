(this["webpackJsonpgoit-react-hw-03-image"]=this["webpackJsonpgoit-react-hw-03-image"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),c=n.n(o),i=n(9),r=n.n(i),s=(n(15),n(8)),l=n(2),h=n(3),u=n(5),d=n(4),p=(n.p,n(16),n(6),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).handleOnClic=function(e){t.props.onClick(e)},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=this.props.image.webformatURL,n=this.props.image.id;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return t.handleOnClic(e)},children:Object(a.jsx)("img",{src:e,alt:"",className:"ImageGalleryItem-image"})},n)})}}]),n}(c.a.Component)),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).handleKeyDowne=function(e){"Escape"===e.code&&(console.log("Escape"),t.props.onClick())},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDowne)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDowne)}},{key:"render",value:function(){var t=this.props.images,e=this.props.index;return Object(a.jsx)("div",{className:"Overlay",children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:t[e].largeImageURL,alt:""})})})}}]),n}(c.a.Component),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={index:0,loadModal:!1},t.handleClick=function(){t.setState({loadModal:!t.state.loadModal})},t.handleLoadModal=function(){t.setState({loadModal:!t.state.loadModal})},t.handleFind=function(e){for(var n=t.props.images,a=0;a<n.length;a+=1)if(e===n[a].webformatURL)return void t.setState({index:a})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=this.props.images;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("ul",{className:"ImageGallery",onClick:this.handleLoadModal,children:[e.map((function(e){return Object(a.jsx)(p,{image:e,onClick:t.handleFind})})),";"]}),this.state.loadModal&&Object(a.jsx)(f,{images:e,index:this.state.index,onClick:this.handleLoadModal})]})}}]),n}(c.a.Component),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={find:""},t.handleInputFilterChenge=function(e){t.setState({find:e.currentTarget.value})},t.heandleOnClick=function(e){e.preventDefault(),t.props.onChenge(t.state.find)},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",onClick:this.heandleOnClick,children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleInputFilterChenge})]})})}}]),n}(c.a.Component),j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{type:"submit",className:"Button",onClick:this.props.onClick,children:"Load more"})})}}]),n}(c.a.Component),b=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={images:[],find:"forest",pagecount:1},t.handleInputFilterChenge=function(e){t.setState({find:e}),t.setState({pagecount:1})},t.handleAddPage=function(){t.setState((function(t){return{pagecount:t.pagecount+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.state.find.toLowerCase();fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(this.state.pagecount,"&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.json()})).then((function(e){return t.setState({images:e.hits})}))}},{key:"componentDidUpdate",value:function(t,e){var n=this;if(e.find!==this.state.find){var a=this.state.find.toLowerCase();fetch("https://pixabay.com/api/?q=".concat(a,"&page=").concat(this.state.pagecount,"&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.json()})).then((function(t){return n.setState({images:t.hits})}))}if(1!==this.state.pagecount){if(e.pagecount!==this.state.pagecount){var o=this.state.find.toLowerCase();fetch("https://pixabay.com/api/?q=".concat(o,"&page=").concat(this.state.pagecount,"&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.json()})).then((function(t){return n.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits))}}))}))}}else fetch("https://pixabay.com/api/?q=".concat(this.state.find.toLowerCase(),"&page=").concat(this.state.pagecount,"&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.json()})).then((function(t){return n.setState({images:t.hits})}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{onChenge:this.handleInputFilterChenge}),Object(a.jsx)("br",{}),Object(a.jsx)(m,{images:this.state.images,loadModal:this.state.loadModal,onClick:this.handleLoadModal}),Object(a.jsx)(j,{onClick:this.handleAddPage})]})}}]),n}(c.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),c(t),i(t)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),O()},6:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.d4121d64.chunk.js.map