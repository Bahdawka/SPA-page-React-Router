import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>It is "Home" page</h1>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
    </div>
  )
}

export default Home