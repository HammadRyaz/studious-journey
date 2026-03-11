import { createContext, useReducer } from "react";

export const StoreContext = createContext({
  TodoItem: [],
  AddTodoItem: () => {},
  DeleteTodoItem: () => {},
});
function Reducer(crrItem, action) {
  let NewItem = crrItem;
  if (action.type === "add") {
    NewItem = [
      ...crrItem,
      { name: action.payload.Name, date: action.payload.Date },
    ];
  } else if (action.type === "delete") {
    NewItem = crrItem.filter((_, i) => i !== action.payload.index);
  }
  return NewItem;
}

const StoreContextWrapper = ({ children }) => {
  let MyTodoItems = [
    { name: "Buy Milk ", date: " 12-12-2025" },
    { name: "Buy Cofee", date: " 12-12-2025" },
    { name: "Buy Juice", date: " 12-12-2025" },
  ];
  const [TodoItem, dispatchTodoItem] = useReducer(Reducer, MyTodoItems);
  function AddTodoItem(Name, Date) {
    let NewItem = {
      type: "add",
      payload: {
        Name,
        Date,
      },
    };
    dispatchTodoItem(NewItem);
  }
  function DeleteTodoItem(index) {
    let DeleteItem = {
      type: "delete",
      payload: {
        index,
      },
    };
    dispatchTodoItem(DeleteItem);
  }

  return (
    <StoreContext.Provider value={{ TodoItem, AddTodoItem, DeleteTodoItem }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextWrapper;
