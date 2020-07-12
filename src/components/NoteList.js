import React,{Component} from 'react'
// import NoteInput from './components/NoteInput'
 import NoteItem from '../components/NoteItem'

class NoteList extends Component
{
  render()
  {
    const { items, clearList, handleDelete, handleEdit } = this.props; 
    return(
      <ul className="ulist">
        <h2>Notes-List</h2>
        {items.map(item => {
          return (
            <NoteItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="clear"
          onClick={clearList}>
          CLEAR
        </button>
      </ul>
    )
  }
}

export default NoteList;