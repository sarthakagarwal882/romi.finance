import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from './pages/DashboardPage/DashboardPage'
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
