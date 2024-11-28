import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import Navigation from './components/Navigation'
import ScrollReset from './components/ScrollReset'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'



const App = () => {

  return (
    <div className='mainFont'>
      <Router>
        <ScrollReset/>
        <Navigation/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />}/>
          <Route path="/about" element={<About />}/>
        </Routes>

        <Footer/>

      </Router>
      
    </div>
  )
}

export default App
