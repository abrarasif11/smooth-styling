import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Appoinment from './component/Appoinment/Appoinment';
import Categories from './component/Categories/Categories';
import ReLogin from './component/Register/ReLogin/ReLogin'
import ReSignUp from './component/ReSignUp/ReSignUp'
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Spinner from './component/Spinner/Spinner';
import Testimonial from './component/Testimonial/Testimonial';
import GiveReview from './component/GiveReview/GiveReview';
import PrivateRoute from './component/Route/PrivateRoute/PrivateRoute';
import AdminRoute from './useHooks/AdminRoute';
import Dashboard from './component/Dashboard/Dashboard';
import DashboardLayout from './component/Layout/DashboardLayout/DashboardLayout';
import MyAppointment from './component/Dashboard/MyAppointment/MyAppointment';
import MyUsers from './component/Layout/DashboardLayout/MyUsers';
import ErrorPage from './component/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Main></Main>,
      children: [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/appointment',
          element : <PrivateRoute><Appoinment></Appoinment></PrivateRoute>
        },
        {
          path : '/testimonial',
          loader :() => fetch('https://smooth-styling-server.vercel.app/review'),
          element : <Testimonial></Testimonial>
        },
        {
          path : '/about',
          element : <About></About>
        },
        {
          path : '/service',
          element : <PrivateRoute><Categories></Categories></PrivateRoute>
          
        },
        {
          path : '/reviews',
          element : <PrivateRoute><GiveReview></GiveReview></PrivateRoute>
        },
        {
          path : '/register',
          element : <ReSignUp></ReSignUp>
        },
        {
          path : '/login',
          element : <ReLogin></ReLogin>
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    },
    {
      path : '/dashboard',
      element : <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children : [
        {
          path : '/dashboard',
          element : <MyAppointment></MyAppointment>
        },
        {
          path : '/dashboard/allUser',
          element : <MyUsers></MyUsers>
        },
      ]
    }
  ])
  return (
    <div className="App overflow-x-hidden">
    <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
