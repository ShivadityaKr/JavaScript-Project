import './App.css';
import React , {useState} from 'react';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import User from './components/user/user';
import Login from './components/login/login';
import Register from './components/register/register';
function App() {
  const [user, setLoginUser ] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' 
          element={
          user && user._id ? <User setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />
          }/>
          <Route exact path='/login' element={<Login setLoginUser={setLoginUser} />}/>
          <Route exact path='/register' element={<Register/>}/>
         </Routes>
      </Router>
      
    </div>
  );
}
  
export default App;
