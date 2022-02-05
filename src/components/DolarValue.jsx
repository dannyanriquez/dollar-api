import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



export const DolarValue = () => {
  
const [dolar, setDolar] = useState([]); 


const url = "https://criptoya.com/api/dolar"


const fetchApi = async () => {

const response = await fetch(url)
const responseJSON = await response.json()
const dolarArray = Object.values(responseJSON)

setDolar(dolarArray)


}

console.log(dolar)
useEffect(() => {
  
  fetchApi()
  
}, []);


  return (
  <div className='mt-5 text-center'>

<MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Tipo</th>
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
       )
        
          
        }
        
      </MDBTableBody>
    </MDBTable>

  </div>
  )};
