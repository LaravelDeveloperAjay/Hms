import './App.css'
import {BrowserRouter as Router,
Routes,
Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
function App() {
  0
  return (
    <>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
  </Routes>
</Router>
    </>
  )
}

export default App
