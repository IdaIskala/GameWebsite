import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import Navigation from './components/Navigation'


import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div className='mainFont'>
      <Router>

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
