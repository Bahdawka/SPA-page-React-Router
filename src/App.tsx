import { RouterProvider } from 'react-router'
import { router } from './config/router'

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