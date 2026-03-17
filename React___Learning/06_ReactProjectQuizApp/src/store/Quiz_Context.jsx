import { createContext, useReducer } from "react";
import question from "../data/Question";

const QuizContext = createContext();

const initialState = {
  username: "Demo",
  question,
  index: 0,
  score: 0,
  completed: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, username: action.payload };
    case "ANSWER":
      return {
        ...state,
        score:
          action.payload == question[state.index]
            ? state.score + 1
            : state.score,
        index: state.index + 1,
      };
    case "FINISH":
      return {
        ...state,
        completed: true,
      };
    default:
      return { ...state };
  }
}

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
