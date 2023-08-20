import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './login/login';
import One from './one/one';
import Two from './two/two';
import Third from './third/third';
import Fourth from './fourth/fourth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, 
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "one",
    element: <One/>
  },
  {
    path: "two",
    element: <Two/>
  },
  {
    path: "third",
    element: <Third/>
  },
  {
    path: "fourth",
    element: <Fourth/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
