import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Appoinment from './component/Appoinment/Appoinment';
import Categories from './component/Categories/Categories';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import ReLogin from './component/Register/ReLogin/ReLogin';
import ReSignUp from './component/ReSignUp/ReSignUp';
import Spinner from './component/Spinner/Spinner';
import Testimonial from './component/Testimonial/Testimonial';

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
          element : <Appoinment></Appoinment>
        },
        {
          path : '/testimonial',
          element : <Testimonial></Testimonial>
        },
        {
          path : '/about',
          element : <About></About>
        },
        {
          path : '/service',
          element : <Categories></Categories>
          
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
      
    }
  ])
  return (
    <div className="App">
    <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
