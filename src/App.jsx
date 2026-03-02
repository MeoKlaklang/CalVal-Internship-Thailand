import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programmer from './pages/Programmer'
import SoftwareTester from './pages/SoftwareTester'
import Researcher from './pages/Researcher'
import ContentCreator from './pages/ContentCreator'
import GraphicDesigner from './pages/GraphicDesigner'
import Interpreter from './pages/Interpreter'
import AboutCalVal from './pages/AboutCalVal'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/Pages/Home" element={<Home />} />
      <Route path="/Pages/Programmer" element={<Programmer />} />
      <Route path="/positions/software-tester" element={<SoftwareTester />} />
      <Route path="/positions/researcher" element={<Researcher />} />
      <Route path="/positions/content-creator" element={<ContentCreator />} />
      <Route path="/positions/graphic-designer" element={<GraphicDesigner />} />
      <Route path="/positions/interpreter" element={<Interpreter />} />
      <Route path="/about-calval" element={<AboutCalVal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
