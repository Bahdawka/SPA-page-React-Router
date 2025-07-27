import { NavLink } from 'react-router'

const NotFound = () => {
  return (
    <div className='notfound__container'>
      <h1>Source not found, please back to the Home page </h1>
      <div ><NavLink to='/'>Home page </NavLink></div>
    </div>
  )
}

export default NotFound