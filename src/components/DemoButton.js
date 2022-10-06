import React, { useState } from 'react';
import Button from '@mui/material/Button';
  
const DemoButton = ( ) => {
  const [change, setChange] = useState(true);     
      return (
        <div>
          {/* <button onClick = {() => setChange(!change)}>
            Click Here For Event Information
          </button> */}

          <Button 
          variant="contained"
          onClick = {() => setChange(!change)}
          >
          Click Here For Event Information
          </Button>

          {change ? <h1> Welcome to Event</h1> : 
          <p><h3> You can enjoy the stunning city lighting all year round, 
            for Jyväskylä has over 100 permanent lighting sites and installations. 
            The highlights of the year are, however, the City of Light event, 
            which takes place in the autumn and the Illuminated Christmas Park in the Church Park at Christmas time. 
            In the darkening autumn evenings, the City of Light Event introduces not only the permanent lighting sites 
            and installations in the city but also the more and more glorious works of light art built for the event</h3></p>
            }
        </div>
        );
  }
 
export default DemoButton;