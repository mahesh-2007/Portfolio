import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import About from './about'
import Project from './Project'
import { BrowserRouter , createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },{
    path: "/Project",
    element: <Project />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
 
  </StrictMode>,
)
