import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Inicio} from './components/Inicio'
import {DolarValue} from './components/DolarValue'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/cotizaciones" element={<DolarValue/>}/>
        <Route exact path="/" element={<Inicio/>}/>

       </Routes>
      
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
