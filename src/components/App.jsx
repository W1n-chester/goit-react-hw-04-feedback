import { useState } from 'react';
import { Section } from './Section/Section';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Section
        onFeedback={addFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

