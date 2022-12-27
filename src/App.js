import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/login'
import Verify from './components/verify'
import Congrats from './components/conrats';
function App() {
  return (
  
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/verify/:id' element={<Verify/>}/>
          <Route path='/congrats' element={<Congrats/>}/>
        </Routes>  
      </Router> 
    
  );
}

export default App;
