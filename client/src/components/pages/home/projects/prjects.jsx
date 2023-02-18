import * as React from 'react';
import ProjectCard from '../../../projects/project';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


export default function Projects(){
    return(<>
        <React.Fragment>

          <CssBaseline />

    <Container maxWidth="xl">

<h1>Examples of completed projects</h1>
<Box
  sx={{
    display: 'grid',
    gap: 6,
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent:'center',
    justifyItems:'center',
  }}  >
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />

</Box>
</Container>
</React.Fragment>

    </>)
}
