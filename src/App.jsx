import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <h1>This is my HomePage</h1>
  },
  {
    path: '/about',
    element:(<div>
      <h1>This is About Page Open now</h1>
      <h1>What are you thinking today</h1>
      </div>)
  }
])

function App() {
  return <RouterProvider router={router}/>
};

export default App
