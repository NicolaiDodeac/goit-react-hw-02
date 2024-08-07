const Options = ({ count, updateFeedback, totalFeedback, resetCount }) => {
  return (
    <ul>
      {Object.keys(count).map((item) => (
        <li key={item}>
          <button type="button" onClick={() => updateFeedback(item)}>
            {item}
          </button>
        </li>
      ))}
      {totalFeedback > 0 ? (
        <li>
          <button type="button" onClick={resetCount}>
            Reset
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Options;
