import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  console.log(action)

  switch (action.type) {
    case 'INCREMENT':
      const id = action.data
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)

    case 'CREATE':
      console.log(action.data)
      return state.concat(action.data)
    
    case 'INIT_ANECDOTES' :
      return action.data

    default:
      return state
  }

}

export const incrementVote = ( anecdote ) => {
  return async dispatch => {
    const votedAnecdote = {
      ...anecdote,
      'votes' : anecdote.votes + 1
    }


    await anecdoteService.vote(votedAnecdote)
    dispatch({
      type: "INCREMENT",
      data: anecdote.id
    })
  }

}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.addAnecdote(content)
    dispatch({
      type: "CREATE",
      data: newAnecdote
    })
  }
}

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: notes
    })
  }
}

export default anecdoteReducer