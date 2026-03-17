import { useNavigate } from "react-router-dom";

const QuesCard = ({ question, index, dispatch }) => {
  const navigate = useNavigate();
  const current = question[index];

  function checkAns(e) {
    const ans = e.target.innerText;
    dispatch({
      type: "ANSWER",
      payload: ans,
    });

  }
  return (
    <>
      <div key={current.id} className="mb-6 rounded-xl bg-white p-4 shadow">
        {/* Question */}
        <p className="mb-4 text-lg font-semibold text-gray-800">
          {current.question}
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={checkAns}
              className="w-full rounded-xl border bg-gray-100 px-4 py-3 text-left font-medium transition-all duration-200 hover:bg-blue-500 hover:text-white"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuesCard;
