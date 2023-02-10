import './App.css';
import ResponsiveAppBar from './components/appBar/appBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import prof from './assets/prof.jpg';

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
      <Stack spacing={0} sx={{ flexGrow: 1 }}>

   <ThemeProvider theme={lightTheme}>

    <ResponsiveAppBar />
    <div class="bodyshadow">
      <div className='slideContent'>
       <h1>Hamid Asiabari</h1>
       <p>
       Hello . I am Hamid. I have 11 years of programming experience in different languages and have worked with many companies as a programmer, consultant and project manager. In recent years, I have worked as a freelancer with the best people I know in this field, and now with all these experiences, I am ready to serve you to get the best results for you.
       </p>
       <h2>
        React js, React Native, NodeJs, Docker and swarm
       </h2>
      </div>
        <div class="shadow">

          <div class="triangle-wrapper">
            <div class="triangle">
            </div>
          </div>
      </div>
    </div>
    <div className="App">
   


    <h1>Asiabari</h1>
    <h1>Asiabari</h1>
      <div className="card">
       React Expert developer
      </div>
      <p className="read-the-docs">
        For more information check my projects.
        
        </p><h1>Asiabari</h1>
    <h1>Asiabari</h1>
      <div className="card">
       React Expert developer
      </div>
      <p className="read-the-docs">
        For more information check my projects.
        
        </p><h1>Asiabari</h1>
    <h1>Asiabari</h1>
      <div className="card">
       React Expert developer
      </div>
      <p className="read-the-docs">
        For more information check my projects.
        
        </p><h1>Asiabari</h1>
    <h1>Asiabari</h1>
      <div className="card">
       React Expert developer
      </div>
      <p className="read-the-docs">
        For more information check my projects.
        
        </p><h1>Asiabari</h1>
    <h1>Asiabari</h1>
      <div className="card">
       React Expert developer
      </div>
      <p className="read-the-docs">
        For more information check my projects.
        
        </p><h1>Asiabari</h1>
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
