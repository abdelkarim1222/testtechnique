
import './App.css'
import Contact from './pages/contact/Contact'
import Courses from './pages/courses/Courses'
import Header from './pages/header/Header'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Courses />
      <Contact />
    </div>
  )
}

export default App
