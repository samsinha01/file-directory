import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/ReactToastify.css'
import { MainLayout } from './app/MainLayout'
import { HomePage } from './pages/HomePage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
