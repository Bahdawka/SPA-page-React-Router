import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import FooterLinks from './components/FooterLinks'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterLinks />
    </BrowserRouter>
  )
}

export default App
