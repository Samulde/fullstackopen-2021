import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementVote } from '../reducers/anecdoteReducer';
import { messageChange } from '../reducers/notificationReducer';

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes).sort((a, b) => a.votes > b.votes ? -1 : 1)
  const dispatch = useDispatch()

  const vote = (id, content) => {
    console.log('vote', id)
    dispatch(messageChange('You\'ve voted for ' + content))
    setTimeout(() => {
      dispatch(messageChange(null))
    }, 3000)

    dispatch(incrementVote(id))
  }

  return (
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      </div>
      ))
  }
export default AnecdoteList