"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className="SearchBar">
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Onsdag d. 25/07</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="DateSelector"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Hovedstaden</MenuItem>
            <MenuItem value={20}>Sjælland</MenuItem>
            <MenuItem value={30}>Syddanmark</MenuItem>
            <MenuItem value={20}>Midtjylland</MenuItem>
            <MenuItem value={30}>Nordjylland</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        id="outlined-basic"
        className="AreaSelector"
        label="Søg efter område"
      />
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">12:00</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="StartTimeSelector"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">13:00</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="EndTimeSelector"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button className="SearchButton" variant="contained" size="large" href="#" sx={{ textTransform: "initial" }}>
        Søg
      </Button>
    </div>
  );
}

export default SearchBar;
