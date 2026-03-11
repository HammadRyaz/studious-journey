import './App.css'
import Tracker from './../Components/Tracker';
import Data from './../Components/Data';
import Total from './../Components/Total';
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom'
import Navbar from './../Components/Navbar';
import Main from './../Components/Main';
const App = () => {
  function User() {
    const { id } = useParams();
    console.log(useParams());
    return <h2> Hello {id}</h2>
  }
  function NotFound() {
    return <h2>404 : Page Not Found </h2>
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/tracker' element={<Tracker />} />
          <Route path='/total' element={<Total />} />
          <Route path='/data' element={<Data />} />
          <Route path='/:id' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App