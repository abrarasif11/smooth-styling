import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Appoinment from './component/Appoinment/Appoinment';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Service from './component/Services/Service';
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
          element : <Service></Service>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
      ]
      
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
