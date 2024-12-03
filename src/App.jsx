import Sidebar from "./Component/Sidebar"
import Favourite from "./Pages/Favourite"
import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<Favourite />} />
      </Routes>
    </div>
  )
}

export default App
