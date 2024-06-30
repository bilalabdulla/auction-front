import { Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import io from 'socket.io-client'
import Home from './pages/Home';
import Login, { loginAction } from './pages/Login';
import Signup from './pages/Signup';
import UserContextProvider from './contexts/UserContext';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import BiddingDetails from './components/BiddingDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='users' element={<UserList />} />
      <Route path='bids' element={<BiddingDetails />} />
    </Route>
  )
)

function App() {
  return ( 
        <UserContextProvider>
        <RouterProvider router={router} />
        </UserContextProvider>
  );
}

export default App;
