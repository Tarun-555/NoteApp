import React,{Component} from 'react'

class NoteItem extends Component
{
  render()
  {
    const { title, handleDelete, handleEdit } = this.props;
    return(
      <li className="list">
        <h3>
          {title}
          <div id="listBut">
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
           <button className="delete" onClick={handleDelete}>
            Delete
          </button>
          </div>
          </h3>
      </li>
    );
  }
}

export default NoteItem