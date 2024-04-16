
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import SearchBar from './components/Srch';
import Packages from './pages/Packages';
import BookPackage from './pages/Book_Package';
import InputRange from './pages/InputRange';
import StudentPackages from './pages/StudentPackages';
import StudentBook from './pages/StudentBook';
import ViewPackage from './pages/ViewPackage';
import Blog from './pages/Blog';
import UserProfilePage from './pages/profile/UserProfilePage';
import Stay from './pages/Stay';
import Payment from './pages/Payment';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/home' element = {<Home/>} />
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/srch' element={<SearchBar />} />
          <Route path='/packages' element ={<Packages/>}/>
          <Route path='/book' element = {<BookPackage/>}/>
          <Route path='/range' element = {<InputRange/>}/>
          <Route  path='/student' element = {<StudentPackages/>}/>
          <Route path='/studentbook' element = {<StudentBook/>}/>
          <Route path='/view' element = {<ViewPackage/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path='/profile' element = {<UserProfilePage/>}/>
          <Route path='/stay' element = {<Stay/>}/>
          <Route path='/pay' element = {<Payment/>}/>
        
         

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
