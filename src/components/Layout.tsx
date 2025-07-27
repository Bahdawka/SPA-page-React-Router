import { Outlet } from 'react-router'
import Menu from './Menu'
import FooterLinks from './FooterLinks'

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <FooterLinks />
    </>
  )
}

export default Layout