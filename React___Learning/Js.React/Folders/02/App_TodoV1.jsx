import React, { useState } from "react";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import DisplayTodo from "./DisplayTodo";
import FooterTodo from "./FooterTodo";
import Container from './Container';

const App_TodoV1 = () => {
  const FILTERS = ["all", "active", "done"];
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn useState hook", completed: true },
    { id: 2, text: "Learn Next Js", completed: false },
    { id: 3, text: "Learn Fetch Api", completed: false },
  ]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const visible = todos.filter((t) => {
    if (filter == "all") return true;
    if (filter == "active") return !t.completed;
    if (filter == "done") return t.completed;
  });

  function count(p) {
    const remain = todos.filter((t) => {
      if (p == "all") return t;
      if (p == "active") return !t.completed;
      if (p == "done") return t.completed;
    });
    return remain.length;
  }

  function addTodo() {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [{ id: Date.now(), text, completed: false }, ...prev]);
    setInput("");
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }
  function clearComplete() {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }
  return (

    <Container name={"Todo App v1"}>
      <AddTodo
        input={input}
        setInput={setInput}
        addTodo={addTodo}
        setFilter={setFilter}
      />
      <FilterTodo FILTERS={FILTERS} count={count} setFilter={setFilter} />
      <DisplayTodo visible={visible} filter={filter} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <FooterTodo count={count} todos={todos} clearComplete={clearComplete} />
    </Container>
  );
};

export default App_TodoV1;
