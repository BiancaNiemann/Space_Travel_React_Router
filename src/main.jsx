import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Layout from './components/Layout'
import Home from './pages/Home'
import Destinations from './components/Destinations'
import Crews from './components/Crews'
import Moon from './pages/Destination/Moon'
import Mars from './pages/Destination/Mars'
import Europa from './pages/Destination/Europa'
import Titan from './pages/Destination/Titan'
import Doug from './pages/Crew/Doug'
import Mark from './pages/Crew/Mark'
import Victor from './pages/Crew/Victor'
import Anoush from './pages/Crew/Anoush'
import Technologies from './components/Technologies'
import Launch from './pages/Technology/Launch'
import Spaceport from './pages/Technology/Spaceport'
import Spacecapsule from './pages/Technology/Spacecapsule'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />

    <Route path="destination" element={<Destinations />}>
      <Route path="moon" element={<Moon />} />
      <Route path="mars" element={<Mars />} />
      <Route path="europa" element={<Europa />} />
      <Route path="titan" element={<Titan />} />
    </Route>

    <Route path="crew" element={<Crews />}>
      <Route path="doug" element={<Doug />} />
      <Route path="mark" element={<Mark />} />
      <Route path="victor" element={<Victor />} />
      <Route path="anoush" element={<Anoush />} />
    </Route>

    <Route path="technology" element={<Technologies />}>
      <Route path="launch" element={<Launch />} />
      <Route path="spaceport" element={<Spaceport />} />
      <Route path="spacecapsule" element={<Spacecapsule />} />
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
