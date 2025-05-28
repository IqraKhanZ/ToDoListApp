import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList(prev => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-xl bg-gray-900 text-white p-8 rounded-2xl shadow-2xl">
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <img className="w-9" src={todo_icon} alt="todo icon" />
          <h1 className="text-3xl font-bold tracking-wide">To-Do List</h1>
        </div>

        {/* Input box */}
        <div className="flex items-center gap-3 bg-gray-800 rounded-full px-4 py-3 mb-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add your task..."
            className="bg-transparent text-white placeholder-gray-400 flex-1 outline-none text-lg"
          />
          <button
            onClick={add}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition text-white px-5 py-2 rounded-full font-semibold"
          >
            ADD +
          </button>
        </div>

        {/* Todo items */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {todoList.map((item, index) => (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
