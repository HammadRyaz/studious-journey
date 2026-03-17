import { useContext } from "react";
import { QuizContext } from "../store/Quiz_Context";

const Result = () => {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div
      className={`flex h-60 min-w-screen flex-col items-center justify-between pt-12`}
    >
      <h1 className="text-3xl font-black">Congrass , {state.username} 🏆</h1>
      <h1 className="font-mono text-3xl font-black">
        Your Score : {state.score}{" "}
      </h1>

      <div>
        <button
          className={`m-2 cursor-pointer rounded bg-green-600 p-2 transition-all hover:bg-green-700 hover:pr-3 hover:pl-3`}
        >
          View Leaderboard
        </button>

        <button
          className={`m-2 cursor-pointer rounded bg-yellow-500 p-2 transition-all hover:bg-yellow-600 hover:pr-3 hover:pl-3`}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Result;
