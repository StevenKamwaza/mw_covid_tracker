import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function HeaderFigures() {
  
  return (
    <React.Fragment>
      <Title>Malawi</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
        <Typography component="p" variant="h4">
          $3,024.00
        </Typography>
      </Typography>
      <div>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Recovery: on 15 March, 2019
      </Typography>
      </div>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
