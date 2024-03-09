import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from './Reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar/navbar'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    async function fetch() {
      const token = localStorage.getItem('token')
      console.log(token)
      if (token) {
        dispatch(fetchUser(token))
      }
      else {
        navigate('/login')
      }
    }
    fetch()
  }, [])
  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
