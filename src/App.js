import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products';
import Main from './layout/Main';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetails from './component/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        },
        {
          path: '/friends',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        }
      ]
    },
    { path: '*', element: <h3>This route is not found</h3> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
