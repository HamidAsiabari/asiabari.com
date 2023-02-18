import ResponsiveAppBar from '../../appBar/appBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import About from './about/about';
import Experience from './exprience/exprience';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6e8080',
    },
  },
});


export default function Home(){


return(<>


<Stack spacing={0} sx={{ flexGrow: 0 }}>

<ThemeProvider theme={lightTheme}>

 <ResponsiveAppBar />
    
 <About  />

<Experience />
 <div className="App">



 </div>
 </ThemeProvider>
 

 </Stack>



</>)

    }