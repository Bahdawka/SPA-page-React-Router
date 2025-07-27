import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Source not found, please back to the "Home" page </h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default NotFound