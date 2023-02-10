import './App.css';
import ResponsiveAppBar from './components/appBar/appBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#366b8f',
    },
  },
});
function App() {

  return (<>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>

   <ThemeProvider theme={lightTheme}>

    <ResponsiveAppBar />
    <div className="App">
   
    <h1>Asiabari</h1>
    <h1>Asiabari</h1>
      <div className="card">
       React Expert developer
      </div>
      <p className="read-the-docs">
        For more information check my projects.
        
        </p>
    </div>
    </ThemeProvider>
    </Stack>
    </>
  )
}

export default App
