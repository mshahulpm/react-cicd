import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/User';
import Books from './pages/Books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/books',
    element: <Books />
  }
])

function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
