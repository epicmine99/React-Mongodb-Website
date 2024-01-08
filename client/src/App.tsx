import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing";
import Navbar from "./components/Navbar"
import './App.css'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" >
          <Route index element={<Landing/>}/>
          <Route path="/blog" >
          <Route index element={<Landing/>}/>
          
          </Route>
          </Route>
          </Routes>


    </Router>
  )
}

export default App
