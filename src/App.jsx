import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      {/* <Route exact path="/restaurants" element={<RestaurantsPage />} />
      <Route exact path="/restaurants/:id" element={<RestaurantSinglePage />} />
      <Route exact path="/users" element={<UsersPage />} />
      <Route exact path="/users/:id" element={<UserSinglePage />} /> */}
    </Routes>
  )
}
