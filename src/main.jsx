import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Home/Root';
import Login from './Authentication/Login';
import AuthProvider from './Providers/AuthProvider';
import Register from './Authentication/Register';
import ManageFoods from './Pages/Home/ManageFoods';
import Private from './Providers/Private';
import AddFood from './Pages/Home/AddFood';
import FoodRequest from './Pages/Home/FoodRequest';
import Banner from './Pages/Home/Banner';
import AvailableFoods from './Pages/Home/AvailableFoods';
import Details from './Pages/Home/Details';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:'/',
      element:<Banner></Banner>
    },{
      path:'/login',
      element:<Login></Login>
    },{
  path:'/availaleFoods',
  element:<AvailableFoods></AvailableFoods>,
  loader:()=>fetch('http://localhost:4000/featured')

    },
   {
    path:'/register',
    element:<Register></Register>
   },{
    path:'/manageFood',
    element:<Private><ManageFoods></ManageFoods></Private>,

   },{
    path:'/addFood',
    element:<Private><AddFood></AddFood></Private>
   },{
    path:'/reqFood',
    element:<Private><FoodRequest></FoodRequest></Private>
   },{
    path:'/details/:id',
   element:<Details></Details>,
   loader:({params})=> fetch(`http://localhost:4000/details/${params.id}`)    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  
   
  </StrictMode>,
)