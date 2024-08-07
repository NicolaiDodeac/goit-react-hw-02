import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setCount((prevCount) => ({
      ...prevCount,
      [feedbackType]: prevCount[feedbackType] + 1,
    }));
  };

  const totalFeedback = count.good + count.neutral + count.bad;
  console.log(totalFeedback);

  const resetCount = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        resetCount={resetCount}
        count={count}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? <Feedback count={count} /> : <Notification />}
    </>
  );
}

export default App;
