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
<<<<<<< HEAD
import Details from './Pages/Home/Details';

=======
>>>>>>> 8e0e5e4105771fd455c86acb8d7ea952fbbd1c52

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
<<<<<<< HEAD
=======
  loader:()=>fetch('http://localhost:4000/featured')
>>>>>>> 8e0e5e4105771fd455c86acb8d7ea952fbbd1c52
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
   loader:({params})=> fetch(`httphttp://localhost:5173/details/${params.id}`)    }
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