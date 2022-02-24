import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



export const DolarValue = () => {
  
const [dolar, setDolar] = useState([]); 


useEffect(() => { 

  fetch("https://criptoya.com/api/dolar")
  .then((res)  => res.json())
  .then((data) => setDolar(data))
  .catch(err => console.log(err))
  .finally();

},[]);

console.log(dolar)

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
        dolar && Object.entries(dolar).map(([key, value], index) => 

       <tr key={index} className='table-dark'>
       <th scope='row'>{key}</th>
      <td>${value}.-</td>
     </tr>
        )}
  
      </MDBTableBody>
    </MDBTable>

    <h5>REFERENCIAS</h5>
    <ul  className='mt-3 list-unstyled'> 
      <li>"oficial": Cotización Banco Nación.</li>
      <li> "solidario": Cotización con impuesto PAIS + Imp. GANANCIAS.</li>
      <li>"mep": Dólar Bolsa (calculado con el bono AL30).</li> 
      <li>"mepgd30": Dólar Bolsa (calculado con el bono GD30).</li>   
      <li>"ccl": Dólar Contado con Liquidación (calculado con el bono AL30).</li>    
      <li>"cclgd30": Dólar Contado con Liquidación (calculado con el bono GD30).</li>    
      <li>"ccb": Dólar Contado con Bitcoin.</li>    
      <li>"blue":Dólar Informal.</li>
    </ul>
  </div>
  )};
