import React, { Component } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';

export class BreedSelect extends Component {
    render() {
      const { listBreed, handleChange } = this.props;
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">All Breeds</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Breeds"
                onChange={ handleChange }
            >
                <MenuItem key="allBreeds" value="allBreeds">All Breeds</MenuItem>
                {
                    listBreed.map((item, index) => (
                        <MenuItem key={ index } value={ item }>{ item }</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
  }
}

export default BreedSelect