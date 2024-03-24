
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/home' element = {<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
