import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Main from './layout/main/Main';
import About from './components/about/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/shop', element: <Shop></Shop> },
        { path: '/about', element: <About></About> },
      ]
    },
  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
