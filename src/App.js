import './App.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState({})
  const [buttonPressed, setButtonPressed] = useState(false)
  const entry = useRef();
  const status = useRef();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks/table")
        setTasks(response.data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [buttonPressed])

  const handleClick = async (statusChange, id) => {
    try {
      const response = await axios.put(`http://localhost:3000/tasks/${id}`, {
        status: statusChange
      })
      if (response.status === 200) {
        setButtonPressed(!buttonPressed)
      } else {
        console.log('Something went wrong')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (evt) => {
    try {
      const response = await axios.post(`http://localhost:3000/tasks/${id}`, {
        entry: entry.current.value,
        status: "to-do"
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/tasks/${id}`, {
      })
      if (response.status === 200) {
        setButtonPressed(!buttonPressed)
      } else {
        console.log('Something went wrong')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div id="to-do" className="section">
          <div className="list">
            <h1>My To Do List:</h1>
            <p className='newItem'>New Item</p>
            <form onSubmit={handleSubmit}>
              <input type="text" ref={entry} />
            </form>
            <div>
              <h2>To Do Items:</h2>
              <ul>
                {
                  items["to-do"] ?
                    items["to-do"].map((item, idx) => {
                      return (
                        <div className='listItem'>
                          <Link to={`/items/${item._id}`}><li>{item.entry}</li></Link>
                          <button onClick={() => { handleClick("completed", item._id) }} className="button">Complete</button>
                          <button onClick={() => { handleDelete(item._id) }} className="button">Delete</button> </div>
                      )
                    })
                    :
                    ""
                }
              </ul>
            </div>
            <div>
              <h2>Completed:</h2>
              <ul>
                {
                  items["completed"] ?
                    items["completed"].map((item, idx) => {
                      return (
                        <div className='listItem'>
                          <Link to={`/items/${item._id}`}><li style={{ textDecoration: 'line-through' }}>{item.entry}</li></Link>
                          <button className='button' onClick={() => { handleClick("to-do", item._id) }}>To-Do</button>
                          <button onClick={() => { handleDelete(item._id) }} className="button">Delete</button>
                        </div>
                      )
                    })
                    :
                    ""
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;