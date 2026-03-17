const ProgressBar = ({ progress }) => {
  return (
    <div className="w-90 bg-gray-300 rounded-full h-4 overflow-hidden">
      <div
        className="bg-blue-500 h-full transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;