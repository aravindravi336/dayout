
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
import ViewPackages from './pages/admin_pages/ViewPackages';
import Blog from './pages/Blog';
import UserProfilePage from './pages/profile/UserProfilePage';
import Stay from './pages/Stay';
import Payment from './pages/Payment';
import Admin_SideBar from './pages/admin_pages/Admin_SideBar'
import Admin_NavBar from './pages/admin_pages/Admin_NavBar'
import Admin_Add from './pages/admin_pages/Admin_Add';
import Admin_AddStudent from './pages/admin_pages/Admin_AddStudent';
import ViewStudentPackages from './pages/admin_pages/VIewStudentPackages';
import ViewFeedback from './pages/admin_pages/ViewFeedBack';
import Chatbot from 'react-chatbot-kit';
import ChatBott from './chatbot/ChatBot';


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
          <Route path='/blog' element = {<Blog/>}/>
          <Route path='/profile' element = {<UserProfilePage/>}/>
          <Route path='/stay' element = {<Stay/>}/>
          <Route path='/pay' element = {<Payment/>}/>
          <Route path='/adminviewstudent' element ={<ViewStudentPackages/>}/>
          <Route path='/adminviewpackage' element ={<ViewPackages/>}/>
          <Route path='/adminsidebar' element = {<Admin_SideBar/>}/>
          <Route path='/adminnavbar' element = {<Admin_NavBar/>}/>
          <Route path='/adminadd' element = {<Admin_Add/>}/>
          <Route path='/adminaddstudent' element = {<Admin_AddStudent/>} />   
          <Route path='/viewfeedback' element = {<ViewFeedback/>}   /> 
          <Route path = '/bott' element = {<ChatBott/>}/>
         

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
