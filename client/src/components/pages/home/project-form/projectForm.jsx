import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function ProjectForm() {
  return (


    <div class="bodyshadow formbody">

    <div className="form">
     
    <div className="form_title">
      Define your <span> Idea</span>,<span> Project</span> or<span> Task</span> for Analyze
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
        <textarea className="form_inputs" col="100" required />
      </div>
     
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
      <button className="form_button">Send message</button>
    </form>
  </div>





      </div>





  );
}