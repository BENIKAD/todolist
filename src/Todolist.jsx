import React, { useState } from 'react';
import './App.css';

const Todolist = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(props.data);
  
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.onEdit(props.id, editedItem);
    setIsEditing(false);
    setEditedItem(props.data); // Reset editedItem to current data after saving
  };

  const handleInputChange = (e) => {
    setEditedItem(e.target.value);
  };

  return (
    <div>
      <div className='box2'>
        {isEditing ? (
          <>
            <input type="text" value={editedItem} onChange={handleInputChange} />
            <button className='mybutton' onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h3 className='mytext'>{props.data}</h3>
            <button className='mybutton' onClick={handleEdit}>Edit</button>
            <button className='mybutton' onClick={() => props.onSelect(props.id)}>Delete</button>
          </>
        )}
      </div>
      <br />
    </div>
  );
};

export default Todolist;
