import { Typography } from '@mui/material';
import React,{ Component } from 'react';
function Home() {
const myStyle={
backgroundImage:
"D:\\programs\\SCM\\src\\background.avif",
height:'100vh',
marginTop:'-70px',
fontSize:'50px',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
};
return (
<div style={myStyle}>
<Typography variant='h3' justifyContent="center" display="flex" mt="20%">
Welcome
</Typography>
<Typography variant='h6' justifyContent="center" display="flex" mt="23%">
Supply chain management
</Typography>
</div>
);
}
export default Home
