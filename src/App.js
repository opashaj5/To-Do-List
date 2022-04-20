import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="to-do" className="section">
          <h2>My To Do List:</h2>
          <p className="new-item">New Item</p>
          <form onSubmit={handleSubmit}>
            <input placeholder='Enter new item' type="text" ref={entry} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;