import React, { useContext } from "react";
import ProgressBar from "./../Components/ProgressBar";
import question from "../data/Question";
import Time from "./../Components/Time";
import QuesCard from "./../Components/QuesCard";
import { QuizContext } from "../store/Quiz_Context";

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 text-black">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg">
        {/* Top Section */}
        <h1 className="mb-4 py-2 text-center text-xl">
          Welcome , {state.username}
        </h1>
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <ProgressBar progress={80} />
            <Time />
          </div>
        </div>
        <QuesCard question={question} index={state.index} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Quiz;
