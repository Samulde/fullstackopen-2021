import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementVote, createAnecdote } from './reducers/anecdoteReducer'


const App = () => {
  const anecdotes = useSelector(state => state).sort((a, b) => a.votes > b.votes ? -1 : 1)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)

    dispatch(incrementVote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()

    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''

    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="newAnecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App