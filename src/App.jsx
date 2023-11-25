import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';
import TaskContainer from './Components/TaskContainer/TaskContainer';
import DarioFerreyra from './Components/About Us/DarioFerreyra';
import CarlosHeredia from './Components/About Us/CarlosHeredia';
import EmiliaBuchensky from './Components/About Us//EmiliaBunchesky';
import EmilseYbrahim from './Components/About Us//EmilseYbrahim';
import NotFound from './Components/NotFound';


function App() {

  return (
    <>
     
    <NavBar />
    <Routes>

      <Route path='/' element={<TaskContainer />}/> 
      <Route path='/MiLista' element={<TaskContainer />}/>
      <Route path='/Dario' element={<DarioFerreyra />} />
      <Route path='/Carlos' element={<CarlosHeredia />} />
      <Route path='/Emilia' element={<EmiliaBuchensky />} />
      <Route path='/Emilse' element={<EmilseYbrahim />} />
      <Route path='/*' element={<NotFound />}/>


    </Routes>

    </>
  )
}

export default App
