import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import Layout from './components/Layout'
import Home from './pages/Home'
import Destinations from './components/Destinations'
import Crews from './components/Crews'
import Technologies from './components/Technologies'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />

    <Route path="destination" element={<Destinations />}>
      <Route path=":id" element={<Destinations />}/>
    </Route>

    <Route path="crew" element={<Crews />}>
      <Route path=":id" element={<Crews />} />
    </Route>

    <Route path="technology" element={<Technologies />}>
      <Route path=":id" element={<Technologies />} />
    </Route>

  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
