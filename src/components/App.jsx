import React,{useState} from "react";
import Todoitem from "./Todoitem";

function App() {
  const [inputText,setinputText] = useState("");
  const [items,setItems] = useState([]);


  function handleChange(event){
    const newValue =event.target.value;
    setinputText(newValue);
  }
  function addItem(){
    setItems(prevItems =>{
      return [...prevItems,inputText];
    });
    setinputText("");
  }
  function onDelete(id) {
    setItems(prevItems => {
        return prevItems.filter(
            (item,index) => {
                return index !==id;
            }
        )
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem,index) =>(
           <Todoitem key={index} id={index} text = {todoitem} onChecked={onDelete} />))};
        
        </ul>
      </div>
    </div>
  );
}

export default App;
