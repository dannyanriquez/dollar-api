import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



export const DolarValue = () => {
  
const [dolar, setDolar] = useState([]); 
const [tipo, setTipo] = useState([]);

const url = "https://criptoya.com/api/dolar"


const fetchApi = async () => {

const response = await fetch(url)
const responseJSON = await response.json()
const dolarArray = Object.values(responseJSON)
const tipoArray = Object.keys(responseJSON)

setDolar(dolarArray)
setTipo(tipoArray)

console.log(dolar)
}

useEffect(() => { 
  fetchApi()
},[]);


  return (
  <div className='mt-5 text-center'>

<MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Tipo de cambio</th>
          <th scope='col'>Cotización</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      <tr className='table-dark'>
        <th scope='row'>{tipo[0]} - Cotización Banco Nación</th>
       <td>${dolar[0]}.-</td>
      </tr>
      <tr className='table-dark'>
        <th scope='row'>{tipo[1]} - Cotización con impuesto PAIS + Imp. GANANCIAS.</th>
       <td>${dolar[1]}.-</td>
      </tr>
      <tr className='table-dark'>
        <th scope='row'>{tipo[2]} - Dólar Bolsa (calculado con el bono AL30).</th>
       <td>${dolar[2]}.-</td>
      </tr>
      <tr className='table-dark'>
        <th scope='row'>{tipo[3]} - Dólar Bolsa (calculado con el bono GD30).</th>
       <td>${dolar[3]}.-</td>
      </tr>
      <tr className='table-dark'>
        <th scope='row'>{tipo[4]} - Dólar Contado con Liquidación (calculado con el bono AL30).</th>
       <td>${dolar[4]}.-</td>
      </tr>
      <tr className='table-dark'>
        <th scope='row'>{tipo[5]} - Dólar Contado con Liquidación (calculado con el bono GD30).</th>
       <td>${dolar[5]}.-</td>
      </tr>
      <tr className='table-dark'>
        <th scope='row'>{tipo[6]} - Dólar Contado con Bitcoin.</th>
       <td>${dolar[6]}.-</td>
      </tr>
      <tr className='table-dark'>
        <th scope='row'>{tipo[7]} - Dólar Informal</th>
       <td>${dolar[7]}.-</td>
      </tr>

        
      </MDBTableBody>
    </MDBTable>

    <div>
      <p>Ultima actualizacion {dolar[8]} </p>
    </div>

  </div>
  )};
