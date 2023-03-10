import { Toaster } from 'react-hot-toast';
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
          loader :() => fetch('http://localhost:5000/review'),
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
          path : '/reviews',
          element : <GiveReview></GiveReview>
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
