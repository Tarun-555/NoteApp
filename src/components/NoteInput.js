import React,{Component} from 'react'

class NoteInput extends Component
{
  render(){
    const { item, handleChange, handleSubmit} = this.props;
    return(
        <div>
        <form onSubmit={handleSubmit}>
           <input type="text" 
           placeholder="Text here..." 
           value={item}
           onChange={handleChange}/>
           <button id="addButton">
             ADD
           </button>
         </form>
         </div>
    );
  }
}

export default NoteInput;