import { useNavigate } from 'react-router'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>It is "Contact" page </h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Contact