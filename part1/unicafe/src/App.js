import React, { useState } from 'react';
import Button from './Components/Button'
import Statistics from './Components/Statistics'
import Header from './Components/Header'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonGoodIncrement = () => setGood(good + 1);
  const buttonNeutralIncrement = () => setNeutral(neutral + 1);
  const buttonBadIncrement = () => setBad(bad + 1);

  const statistics = []

  const total = good + neutral + bad

  if (total !== 0) {
    let average = (good - bad) / total;
    let positive = (good / total * 100) + " %";

    statistics.push( { text: "good", value: good} );
    statistics.push( { text: "neutral", value: neutral} );
    statistics.push( { text: "bad", value: bad} );
    statistics.push( { text: "average", value: average} );
    statistics.push( { text: "positive", value: positive} );

  }

  return (
    <>
    <Header text="give feedback" />
    <Button onClickHandler={buttonGoodIncrement} text="good" />
    <Button onClickHandler={buttonNeutralIncrement} text="neutral" />
    <Button onClickHandler={buttonBadIncrement} text="bad" />

    <Header text="statistics" />
    <Statistics statistics={statistics} />
    </>
  );
}

export default App;
