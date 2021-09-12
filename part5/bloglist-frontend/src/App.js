import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/Login'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Toggleable'
import BlogForm from './components/BlogForm'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect( () => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login( {
        username, password
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )
      
      blogService.setToken(user.token)
      console.log(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.log('Wrong credentials')
      // setErrorMessage('Wrong credentials')
      // setTimeout(() => {
      //   setErrorMessage(null)
      // }, 5000)
    }
  }

  const createBlog = ( newBlogObject ) => {

    blogService
      .create(newBlogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
      })

    blogFormRef.current.toggleVisibility()
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
  }

  const blogList = () => (
    <>
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </>
  )

  const loginForm = () => (
    <Togglable buttonLabel='login'>
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={ ({ target}) => setPassword(target.value)}
        handleSumbit={handleLogin}
      />
    </Togglable>
  )

  const blogForm = () => (
    <Togglable buttonLabel='add blog' ref={blogFormRef}>
      <BlogForm createBlog={createBlog} />
    </Togglable>

  )

  const logout = () => (
    <button onClick={handleLogout}>
      logout
    </button>
  )

  return (
    <div>
      
      {user === null 
        ? loginForm() 
        : blogForm()
      }

      {user !== null && logout()}
      {user !== null && blogList()}

    </div>
  )
}

export default App