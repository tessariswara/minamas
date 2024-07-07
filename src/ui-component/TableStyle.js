import { styled } from '@mui/material/styles';
import Palette from '../ui-component/ThemePalette';
import { borderRadius, padding } from '@mui/system';

const TableStyle = styled('div')({
  '& .MuiDataGrid-root': {
    border: 'none',
    padding: '20px 50px'
  },
  '& .MuiDataGrid-cell': {
    borderBottom: 'none'
  },
  '& .name-column--cell': {
    color: Palette.primary.main,
    cursor: 'pointer'
  },
  '& .name-column--cell--capitalize': {
    textTransform: 'capitalize'
  },
  '& .name-column--cell:hover': {
    textDecoration: 'none'
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: Palette.grey[200],
    borderBottom: 'none',
    outline: 'none !important',
    borderRadius: '10px'
  },
  '& .MuiDataGrid-virtualScroller': {
    scrollbarWidth: '1px'
  },
  '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
    textTransform: 'capitalize',
    fontSize: '15px'
  },
  '.MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus': {
    outline: 'none !important'
  },
  '.css-1jiby6q-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-1jiby6q-MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
    outline: 'none',
    borderRadius: '10px'
  }
});

export default TableStyle;
