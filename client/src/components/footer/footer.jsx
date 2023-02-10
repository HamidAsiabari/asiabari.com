import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: '#fff',
        p: 1,
        m: 1,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Footer() {
  return (
    <div className='footer'>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Item>
            <p>
                Javascript developer, Hire React developer, React freelancer, software project using react
            </p>
            <p>
            React Native developer, Hire React Native developer, React Native freelancer, Mobile APP project using react Native. Reactjs, React Native And node project using docker
            </p>
            <p>
                
            </p>

        </Item>
        <Item>2</Item>
        <Item>3</Item>
      </Box>
      <p >Copyright © Asiabari.com 2023.</p>
    </div>
  );
}