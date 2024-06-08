import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Todoitems = () => {
  const [input, setinput] = useState('');
  const [todolist, settodolist] = useState([]);


  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleAdd = () => {
    if (input !== '') {
      const newItem = {
        id: uuidv4(),
        text: input,
        completed: false,
      };
      settodolist([...todolist, newItem]);
    }
    setinput('');
  };

  const handleDel = (id) => {
    const newlist = todolist.filter(item => item.id !== id);
    settodolist(newlist);
  };

  const handleEdit = (id) => {
    let t = todolist.filter(i => i.id === id);
    setinput(t[0].text);
    const newlist = todolist.filter(item => item.id !== id);
    settodolist(newlist);
  };

  const handleToggleComplete = (id) => {
    settodolist(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="container">
      <h1 className="center">Todo List</h1>
      <section className="add">
        <h1>Add a Todo</h1>
        <input type="text" value={input} onChange={handleChange} className="text-input" />
        <button className="add-btn" onClick={handleAdd}>Add</button>
      </section>

      <section className="to-do-list">
        <h1>TODO</h1>
        {todolist.map(item => (
          <div className={`flex ${item.completed ? 'completed' : ''}`} key={item.id}>
            <input type="checkbox" checked={item.completed} onChange={() => handleToggleComplete(item.id)} />
            <div className="text">{item.text}</div>
            <button id='edit' onClick={() => handleEdit(item.id)}>Edit</button>
            <button id='del' onClick={() => handleDel(item.id)} >Delete</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Todoitems;