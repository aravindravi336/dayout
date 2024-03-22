
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='' element={<Login />} />
          <Route path='/register' element={<Register />} />


        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
