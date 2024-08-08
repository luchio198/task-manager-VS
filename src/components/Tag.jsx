import { Chip } from '@mui/material-next';
import React from 'react';
import '../styles/tag.css';
import { Box } from '@mui/material';
import '@fontsource/roboto/500.css';

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyleFormat = {
    marginRight: '10px',
    borderRadius: '5px',
  };
  const tagStyleSelected = {
    HTML: { backgroundColor: '#fda821' },
    CSS: { backgroundColor: '#15d4c8' },
    JavaScript: { backgroundColor: '#ffd12c' },
    React: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#f9f9f9' },
  };
  // {
  //   marginRight: '10px',
  //   borderRadius: '5px',
  // }
  return (
    <Chip
      label={<Box sx={{ color: 'gray' }}>{tagName}</Box>}
      size="small"
      variant="outlined"
      style={
        tagStyleFormat && selected
          ? tagStyleSelected[tagName]
          : tagStyleSelected.default
      }
      onClick={() => selectTag(tagName)}
    />
  );
};

export default Tag;
