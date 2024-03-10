import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from './Reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar/navbar'
import loadingGif from './assets/loading.svg'
import Main from './Components/Blogs/blogs'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    function fetch() {
      const token = localStorage.getItem('token')
      if (token) {
        dispatch(fetchUser(token))
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      }
      else {
        navigate('/login')
      }
    }
    fetch()
  }, [])
  return (
    <>
      {
        loading ?
          <img src={loadingGif} alt="loading" />
          :
          <>
            <Navbar />
            <Main />
          </>
      }
    </>
  )
}

export default App
