import React,{Component} from 'react';
import './App.css';
import NoteInput from './components/NoteInput.js'
import NoteList from './components/NoteList.js'

var i=0;
class App extends Component
{
  
  state={
    items:[],
    id:i++,
    item:" ",
    editItem:false
  };

  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();

    const newItem={
      id:this.state.id,
      title:this.state.item
    }
  
   console.log(newItem);

    const updatedItems=[...this.state.items,newItem];

    this.setState({
      items:updatedItems,
      item:'',
      id:i++,
      editItem:false
    })
  };

  clearList = () => {
      i=0;
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };

   render(){
     return(
       <div className="note-app">
         <h1>Notes-Making-App</h1>
         
         <NoteInput 
           item={this.state.item}
           handleChange={this.handleChange} 
           handleSubmit={this.handleSubmit}
           editItem={this.state.editItem}
         />
         <NoteList 
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
       </div>
     );
   }
}

export default App;
