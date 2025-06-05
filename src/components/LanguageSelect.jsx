import React from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';

function LanguageSelect() {
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      style={{ display: 'flex', justifyContent: 'end', width: 140, marginLeft: '20px' }}
      
    >
      <Select
        value={language}
        onChange={handleChange}
        displayEmpty
        // style={{ backgroundColor: 'white' }}
        renderValue={(selected) => {
          if (selected === '') {
            return <em style={{ color: '#fff' }}>English</em>; // Placeholder
          }
          return selected;
        }}
      >
        <MenuItem value="" disabled>
          <em>English</em>
        </MenuItem>
        <MenuItem value="Hindi">Hindi</MenuItem>
        <MenuItem value="Tamil">Tamil</MenuItem>
        <MenuItem value="Kannada">Kannada</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSelect;
