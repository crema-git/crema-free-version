import * as React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@mui/styles';
import Rating from '@mui/material/Rating';
import {DataGrid} from '@mui/x-data-grid';

function renderRating(params) {
  return <Rating readOnly value={params.value} />;
}

renderRating.propTypes = {
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 16,
  },
});

function RatingEditInputCell(props) {
  const {id, value, api, field} = props;
  const classes = useStyles();

  const handleChange = async (event) => {
    api.setEditCellValue({id, field, value: Number(event.target.value)}, event);
    // Check if the event is not from the keyboard
    // https://github.com/facebook/react/issues/7407
    if (event.nativeEvent.clientX !== 0 && event.nativeEvent.clientY !== 0) {
      await api.commitCellChange({id, field});
      api.setCellMode(id, field, 'view');
    }
  };

  const handleRef = (element) => {
    if (element) {
      element.querySelector(`input[value="${value}"]`).focus();
    }
  };

  return (
    <div className={classes.root}>
      <Rating
        ref={handleRef}
        name='rating'
        precision={1}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

RatingEditInputCell.propTypes = {
  /**
   * GridApi that let you manipulate the grid.
   */
  api: PropTypes.any.isRequired,
  /**
   * The column field of the cell that triggered the event
   */
  field: PropTypes.string.isRequired,
  /**
   * The grid row id.
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.number.isRequired,
};

function renderRatingEditInputCell(params) {
  return <RatingEditInputCell {...params} />;
}

export default function RenderRatingEditCellGrid() {
  return (
    <div style={{height: 250, width: '100%'}}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  {
    field: 'places',
    headerName: 'Places',
    width: 120,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    renderCell: renderRating,
    renderEditCell: renderRatingEditInputCell,
    editable: true,
    width: 180,
    type: 'number',
  },
];

const rows = [
  {id: 1, places: 'Barcelona', rating: 5},
  {id: 2, places: 'Rio de Janeiro', rating: 4},
  {id: 3, places: 'London', rating: 3},
  {id: 4, places: 'New York', rating: 2},
];
