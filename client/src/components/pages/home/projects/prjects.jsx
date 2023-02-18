import ProjectCard from '../../../projects/project';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function Projects(){
    return(<>
    <Container maxWidth="xl">

<h1>Examples of completed projects</h1>
<Box
  sx={{
    display: 'grid',
    gap: 1,
    gridTemplateColumns: 'repeat(4, 1fr)',
  }}  >
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />

  <ProjectCard />
<ProjectCard />
<ProjectCard />
<ProjectCard />

<ProjectCard />
<ProjectCard />
<ProjectCard />
<ProjectCard />

</Box>
</Container>
    
    </>)
}
