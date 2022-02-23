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
        { 
        
        dolar.map((data, index) => 
        <tr key={index} className='table-dark'>
        <th scope='row'>Oficial</th>
       <td>${data}.-</td>
       
      </tr>
       )}

        
      </MDBTableBody>
    </MDBTable>

  </div>
  )};
