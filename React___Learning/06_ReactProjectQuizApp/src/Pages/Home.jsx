import { useContext, useState } from "react";
import { QuizContext } from "../store/Quiz_Context";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [name, setName] = useState("");
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();
  function StartQuiz() {
    if (!name || name.trim() === "") return alert("Enter Name First..");
    dispatch({
      type: "SET_NAME",
      payload: name,
    });
    navigate("/quiz");
  }
  return (
    <div
      className={`flex h-60 min-w-screen flex-col items-center justify-between pt-12`}
    >
      <h1 className="text-3xl font-black">Welcome to Quiz App</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
        className={`w-90 rounded-xl border bg-gray-200 p-3 text-black opacity-75`}
      />
      <button
        className={`cursor-pointer rounded bg-green-600 p-2 transition-all hover:bg-green-700 hover:pr-3 hover:pl-3`}
        onClick={StartQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
