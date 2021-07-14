import React, { useState } from 'react';



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
]

let default_points = new Array(anecdotes.length).fill(0)

const Button = (props) => {
  return (
    <button onClick={props.onClickHandler}>{props.text}</button>
  )
}

const Anecdote = ({ selected, points }) => {
  if (points.reduce((a,b) => a + b, 0) === 0) {
    return (
      <p>No votes casted yet.</p>
    )
  }

  return (
    <p>{anecdotes[selected]}
      <br />
      has {points[selected]} votes
    </p>
  )
}

function App() {

   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(default_points)

  const randomAnecdoteGenerator = () => {
    let ran 

    do { 
      ran = Math.floor(Math.random() * anecdotes.length) 
    } while ( ran === selected )

    setSelected(ran)
  }

  const addVote = () => {
    let new_points = [...points]
    new_points[selected] += 1

    setPoints(new_points)
  }

  let max_index = points.indexOf(Math.max(...points))

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote selected={selected} points={points} />
      <Button onClickHandler={addVote} text="vote" />
      <Button onClickHandler={randomAnecdoteGenerator} text="next anecdote" />
      <h1>Anecdote with the most votes</h1>
      <Anecdote selected={max_index} points={points}/>
    </>
  );
}

export default App;
