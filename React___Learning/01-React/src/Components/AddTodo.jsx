import { useContext } from "react";
import { useRef } from "react";
import { StoreContext } from "../store/StoreContext";

const AddTodo = () => {
  const { AddTodoItem } = useContext(StoreContext);
  const refName = useRef();
  const refDate = useRef();
  function handleSubmit(params) {
    params.preventDefault();
    const _Name = refName.current.value;
    const _Date = refDate.current.value;
    refName.current.value = "";
    refDate.current.value = "";
    AddTodoItem(_Name, _Date);
  }
  return (
    <form
      className=" flex flex-wrap w-fit gap-2 justify-between p-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter Todo "
        className="border-2 p-2 rounded-md"
        ref={refName}
      />
      <input type="date" className="border-2 p-2 rounded-md" ref={refDate} />
      <button
        type="submit"
        className="w-28 p-2 bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
