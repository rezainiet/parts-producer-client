import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
<<<<<<< HEAD
import Register from './Pages/Login/Register';
=======
>>>>>>> 4e35940050d14ad34d8006386165114a42f3c6ca

function App() {
  return (
    <div className='max-w-7xl mx-auto px-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:productId' element={<Purchase></Purchase>}></Route>
        <Route path='/dashboard' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
<<<<<<< HEAD
        <Route path='/register' element={<Register></Register>}></Route>
=======
>>>>>>> 4e35940050d14ad34d8006386165114a42f3c6ca
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
