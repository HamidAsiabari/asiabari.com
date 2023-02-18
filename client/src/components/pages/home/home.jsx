import ResponsiveAppBar from '../../appBar/appBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import About from './about/about';
import Footer from "../../footer/footer";
import Projects from './projects/prjects';
import ProjectForm from './project-form/projectForm';
import Milestone from './milestone/milestone';

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
    <Milestone />
    <ProjectForm />
    <Projects />
    <Footer />
  </ThemeProvider>
 </Stack>
</>)
}