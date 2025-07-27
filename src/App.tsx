import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Layout from './components/Layout'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
},
{
  path: '*',
  element: <NotFound />
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