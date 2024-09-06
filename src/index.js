import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './SubComponents/About/About';
import Blog from'./SubComponents/Blog/Blog'
import Catering from './SubComponents/Catering/Catering'
import Feedback from './SubComponents/Feedback/Feedback';
import Menu from './SubComponents/Menu/Menu';
import LoginForm from './Login Form/LoginForm';
import Cart from './SubComponents/Cart/Cart';
import Profile from './SubComponents/Profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRouter= createBrowserRouter([
  {path:'/',
    element: <App/>
  },
  {path:'/about-us',
    element: <About/>
  },
  {path:'/blogs',
    element: <Blog/>
  },
  {path:'/catering',
    element: <Catering/>
  },
  {path:'/feedback',
    element: <Feedback/>
  },
  {path:'/menu',
    element: <Menu/>
  },
  {path:'/profile',
    element: <Profile/>
  },
  {path:'/cart-items',
    element: <Cart/>
  },
])

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={allRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
