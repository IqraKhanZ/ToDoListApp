import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg shadow-sm hover:bg-gray-700 transition">
      <div onClick={() => toggle(id)} className="flex items-center gap-3 cursor-pointer flex-1">
        <img src={isComplete ? tick : not_tick} alt="" className="w-6 h-6" />
        <p
          className={`text-lg ${
            isComplete ? "line-through text-gray-400" : "text-white"
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete"
        className="w-4 h-4 cursor-pointer opacity-70 hover:opacity-100 transition"
      />
    </div>
  );
};

export default TodoItems;
