/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from './pages/DashboardPage/DashboardPage'
import HomePage from "./pages/HomePage/HomePage";
import React from 'react'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/earn' element={<HomePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
