import { useContext, useReducer } from "react";
import AddTodo from "./Components/AddTodo";
import Container from "./Components/Container";
import ListTodo from "./Components/ListTodo";
import Empty from "./Components/Empty";
import { StoreContext } from "./store/StoreContext";

const App = () => {
  const { TodoItem } = useContext(StoreContext);

  return (
    <Container>
      <h1 className="text-2xl pb-2 font-black">Todo App</h1>
      <AddTodo />
      {TodoItem.length > 0 ? <ListTodo /> : <Empty />}
    </Container>
  );
};

export default App;
