import React, {useState, useEffect} from 'react';
//inputText, setInputText,
const Form = ({todos, setTodos, setStatus}) => {
    const [inputText, setInputText] = useState("");
  
    const inputHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text : inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
        <input data-test="input-field" value={inputText} onChange={inputHandler} type="text" className="todo-input" />
        <button data-test="add-button" onClick={submitHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div data-test="select-dropdown" className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    );
}

export default Form;