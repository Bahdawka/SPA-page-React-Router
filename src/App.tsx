import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import FooterLinks from './components/FooterLinks'
import type { ReactElement } from 'react'

const withLayout = (Component: () => ReactElement) => (
  <>
    <Menu />
    <Component />
    <FooterLinks />
  </>
)

const router = createBrowserRouter([{
  path: "/",
  element: withLayout(Home)
},
{
  path: "/about",
  element: withLayout(About)
},
{
  path: "/contact",
  element: withLayout(Contact)
},
{
  path: "*",
  element: withLayout(NotFound)
}
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App


// const App = () => {
//   return (
// <BrowserRouter> <-- варіант вкладеної маршрутизаціЇ через BrowserRouter з Routes та Route
//   <Menu />           імпортуємо BrowserRouter,Routes,Route
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="*" element={<NotFound />} />
//   </Routes>
//   <FooterLinks />
// </BrowserRouter>
// )
// }