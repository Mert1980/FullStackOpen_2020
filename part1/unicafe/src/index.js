import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad;
  const average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / sum;
  const positive = (props.good / sum) * 100;

  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {sum}</p>
      <p>average {isNaN(average) ? 0 : average}</p>
      <p>positive {isNaN(positive) ? 0 : positive} %</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
