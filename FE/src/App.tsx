import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import RegisterPage from "./Pages/RegisterPage"
import NoPage from './Pages/NoPage'
import QuizPage from './Pages/QuizPage'
import Games from './Pages/Games'
import LoginPage from './Pages/LoginPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/games' element={<Games />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </Router>    
  )
}

export default App
