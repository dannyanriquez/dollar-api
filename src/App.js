import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Inicio} from './components/Inicio'
import {Cotizaciones} from './components/Cotizaciones'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/cotizaciones" element={<Cotizaciones/>}/>
        <Route exact path="/" element={<Inicio/>}/>

       </Routes>
      
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
