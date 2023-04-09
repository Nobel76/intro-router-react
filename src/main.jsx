import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About/About';
import Contact from './components/About/Contact/Contact';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './PostDetails/PostDetails';

// const router = createBrowserRouter([
//   // {
//   //   path: '/',
//   //   element:<App />
//   // },
//   // {
//   //   path:'/about',
//   //   element: <About></About>
//   //   },
//   //   {
//   //     path: '/contact',
//   //     element: <Contact></Contact>
//   //   },
//   //   {
//   //     path: '/error',
//   //     element: <Error></Error>
//   //   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <First></First>
      },
    {
          path:'friends',
          element: <Friends></Friends>,
           loader: () => fetch('https://jsonplaceholder.typicode.com/users')

        
    },
    {
path: 'friend/:friendId',
element: <FriendDetails></FriendDetails>,
loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
  
    {
path: 'posts',
element: <Posts></Posts>,
loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
path: 'post/:postId',
element: <PostDetails></PostDetails>,
loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path:'error',
        element: <Error></Error>
      },
      {
           path: '*',
           element: <div>444444444044444</div>
      }
    ]
  }
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
