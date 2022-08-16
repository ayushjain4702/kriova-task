import './App.css';
import {Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
//  import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>

      </Routes>
    </div>
  );
}

export default App;
