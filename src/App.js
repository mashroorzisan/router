import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Main from './layout/main/Main';
import About from './components/about/About';
import Blogger from './components/blogger/Blogger';
import Posts from './components/posts/Posts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Home></Home>
        },
        {
          path: '/blogs/:id',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          },
          element: <Blogger></Blogger>
        },

        { path: '/shop', element: <Shop></Shop> },
        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        { path: '/about', element: <About></About> }]
    },
    { path: '*', element: <div>404 not found</div> }
  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
