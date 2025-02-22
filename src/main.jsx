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
import Update from './Pages/Home/Update';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Error404 from './Pages/Home/Error404';
import { ThemeProvider } from './Pages/Home/ThemeProvider';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error404></Error404>,
    children:[{
      path:'/',
      element:<Banner></Banner>
    },{
      path:'/login',
      element:<Login></Login>
    },{
      path: '/availableFoods/:email?', // Email is optional
      element: <AvailableFoods></AvailableFoods>,
      loader: ({ params }) => {
        // Check if email exists, else fetch without it
        const email = params.email;
        const endpoint = email 
          ? `http://localhost:4000/featured/${email}` 
          : 'http://localhost:4000/featured';
          
        return fetch(endpoint);
      }
  },
  

    
   {
    path:'/register',
    element:<Register></Register>
   },{
    path:'/manageFood/:email',
    element:<Private><ManageFoods></ManageFoods></Private>,
    loader:({params})=> fetch(`http://localhost:4000/featured/${params.email}`)

   },{
    path:'/addFood',
    element:<Private><AddFood></AddFood></Private>
   },{
    path:'/myRequests/:email',
    element:<Private><FoodRequest></FoodRequest></Private>
   },{
    path:'/details/:id',
   element:<Details></Details>,
   loader:({params})=> fetch(`http://localhost:4000/details/${params.id}`)    },{
    path:'/update/:id',
    element:<Private><Update></Update> </Private>,
    loader:({params})=> fetch(`http://localhost:4000/details/${params.id}`)
   }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>

     <AuthProvider>
      <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
 
   </AuthProvider>
     </QueryClientProvider>
   
  
   
  </StrictMode>,
)