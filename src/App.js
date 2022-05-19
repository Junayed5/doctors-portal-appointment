import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from '../src/Pages/Shared/RequireAuth';
import './App.css';
import About from './Pages/About/About';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import MainAppointment from './Pages/MainAppointment/MainAppointment';
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/DashBoard/RequireAdmin';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import ManageDoctor from './Pages/DashBoard/ManageDoctor';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <MainAppointment />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <DashBoard/>
          </RequireAuth>
        } >
          <Route index element={<MyAppointment/>}/>
          <Route path='review' element={<MyReview/>}/>
          <Route path='users' element={<RequireAdmin  ><Users/></RequireAdmin>}/>
          <Route path='addDoctor' element={<RequireAdmin  ><AddDoctor/></RequireAdmin>}/>
          <Route path='manageDoctor' element={<RequireAdmin  ><ManageDoctor/></RequireAdmin>}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
