import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Payment from './Pages/Dashboard/Payment';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className='max-w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/MyPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/purchase/:productId' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>}>
            {/* <Route index element={<Dashboard></Dashboard>} /> */}
            <Route path='myOrders' element={<MyOrders></MyOrders>} />
            <Route path='payment/:id' element={<Payment></Payment>} />
            <Route path='addAReview' element={<AddAReview></AddAReview>} />
            <Route path='myProfile' element={<MyProfile></MyProfile>} />
            <Route path='allUsers' element={<RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>} />
            <Route path='manageOrders' element={<RequireAdmin>
              <ManageOrders></ManageOrders>
            </RequireAdmin>} />
            <Route path='addProduct' element={<RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>} />
            <Route path='manageProduct' element={<RequireAdmin>
              <ManageProduct></ManageProduct>
            </RequireAdmin>} />
          </Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </QueryClientProvider>
    </div >
  );
}

export default App;
