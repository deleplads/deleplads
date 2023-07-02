"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ResetIcon from "@mui/icons-material/RestartAlt";

function SearchBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className="SearchBar">
      <TextField
        id="outlined-basic"
        label="Søg efter område"
        variant="outlined"
        sx={{ minWidth: "35%" }}
      />
      <Box sx={{ minWidth: "15%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
      <Box sx={{ minWidth: "15%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Kommune</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
      <Box sx={{ minWidth: "10%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ugedag</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
      <Box sx={{ minWidth: "10%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tidsrum</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
      <Button
        variant="outlined"
        startIcon={<ResetIcon />}
        sx={{ textTransform: "Capitalize" }}
      >
        Nulstil
      </Button>
    </div>
  );
}

export default SearchBar;
