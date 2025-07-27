import { useNavigate } from 'react-router'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>It is "About" page </h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default About