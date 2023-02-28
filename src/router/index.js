import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))
const Cake = React.lazy(() => import('@/views/home/children/cake'))
const Letter = React.lazy(() => import('@/views/home/children/letter'))
const Video = React.lazy(() => import('@/views/home/children/video'))
const Name = React.lazy(() => import('@/views/home/children/name'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home/',
        element: <Navigate to="/home/cake" />
      },
      {
        path: '/home/cake',
        element: <Cake />
      },
      {
        path: '/home/letter',
        element: <Letter />
      },
      {
        path: '/home/video',
        element: <Video />
      },
      {
        path: '/home/name',
        element: <Name />
      }
    ]
  },
]

export default routes
