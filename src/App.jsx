import s from "./App.module.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { useState } from "react";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [count, setCount] = useState(
    () => JSON.parse(window.localStorage.getItem("count")) || initialState
  );
  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const updateFeedback = (feedbackType) => {
    setCount((prevCount) => ({
      ...prevCount,
      [feedbackType]: prevCount[feedbackType] + 1,
    }));
  };

  const totalFeedback = count.good + count.neutral + count.bad;

  const positivePart = Math.round((count.good / totalFeedback) * 100);

  const resetCount = () => {
    setCount(initialState);
  };

  return (
    <div className={s.app}>
      <Description />
      <Options
        resetCount={resetCount}
        count={count}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          count={count}
          totalFeedback={totalFeedback}
          positivePart={positivePart}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
