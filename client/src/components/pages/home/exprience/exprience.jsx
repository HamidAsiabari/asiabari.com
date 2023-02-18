import ProjectCard from '../../../projects/project';
import Container from '@mui/material/Container';
import Footer from "../../../footer/footer";
import Box from '@mui/material/Box';


export default function Experience(){
    

    return (<>
    
    
    
 <Container maxWidth="md">
 <h1>My experiences</h1>
   <div className="card ">
     <p >
   My experience started with programming in Visual Basic.</p><p>
    After that, I was programming on microcontrollers with Bascom language. </p><p>
     C# was the next programming language that I used for student and personal projects.</p><p>
      I started Java programming to write Android applications, but I got to know the web field and my interest in the web world made me become a PHP and front-end programmer professionally as my profession.
      </p><p> I worked with frameworks like CI and WordPress content management system and I was working with PHP for about 5 years.
        At the same time, I tried assembly and C++ Plus and programming Apache modules.</p><p>
         I implemented a project with Go Backend language. I did a research project on gene ontology with R language.</p><p>
Finally, after all these activities, I decided to focus on JavaScript with the Ricket framework and use all the knowledge and experience I had to create the best web and applications.
   </p>
   
   </div>

</Container>



   <p className="read-the-docs">
     For more information check my projects.
     
     </p>
     
     

     <div class="bodyshadow formbody">





     <div className="form">
     
     <div className="form_title">
       Contact<span> me</span>
     </div>
     <form className="form_items">
       <div className="form_inputs">
         <input type="text" required />
         <label>Your Name</label>
       </div>  
       <div className="form_inputs">
         <input type="text" required />
         <label>Your email</label>
       </div>
       <div className="form_inputs">
         <textarea col="100" required />
       </div>
      
       <button className="form_button">Send message</button>
     </form>
     <div className="form_other">
       <a href="#">forgot password?</a>
       <a href="#">Join Now</a>
     </div>
   </div>





       </div>



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
   
   <Footer />
</>)
}