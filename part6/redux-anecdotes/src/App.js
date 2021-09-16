import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initialiseAnecdotes } from './reducers/anecdoteReducer'
import anecdoteSerivce from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()

  useEffect( () => {
  anecdoteSerivce.getAll().then(notes => 
      dispatch(initialiseAnecdotes(notes))
    )
  }, [])
  
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />  
    </div>
  )
}

export default App