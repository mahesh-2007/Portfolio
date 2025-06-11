import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import About from './about'
import { BrowserRouter , createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
 
  </StrictMode>,
)
