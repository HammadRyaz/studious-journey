import { useContext } from "react";
import { StoreContext } from "./../store/StoreContext";

const ListTodo = () => {
  const { TodoItem, DeleteTodoItem } = useContext(StoreContext);

  return TodoItem.map((todo, index) => (
    <div key={index} className="w-100 flex justify-between flex-wrap py-2">
      <div className="w-40">{todo.name}</div>
      <div className="w-30 text-slate-500 font-mono">{todo.date}</div>
      <button className="w-30 p-2 bg-red-700 hover:bg-red-800 active:scale-95 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
        onClick={() => DeleteTodoItem(index)}
      >
        Delete
      </button>
    </div>
  ));
};

export default ListTodo;
