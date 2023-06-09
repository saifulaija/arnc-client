import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'


export const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/room/:id',
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      }
    ]
  },
  {
    path:'login',
    element:<Login></Login>
  },
  {
    path:'signup',
    element:<Register></Register>
  }
])
