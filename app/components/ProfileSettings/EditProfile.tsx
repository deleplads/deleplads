"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, FormHelperText, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";
import Avatar from "@mui/material/Avatar";

function EditProfile() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setAge(event.target.value);
  };

  return (
    <div className="angry-grid">
      <div id="item-0">
        <div className="ProfileEditHeader">
          <h1>Redigér profil</h1>
          <Button variant="outlined" className="Button">
            Vis profil
          </Button>
        </div>
      </div>
      <div id="item-1">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Navn
        </InputLabel>
        <TextField
          className="Textfield"
          id=""
          placeholder="Fornavn"
          variant="outlined"
        />
      </div>
      <div id="item-2">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          &nbsp;
        </InputLabel>
        <TextField
          className="Textfield"
          id=""
          placeholder="Efternavn"
          variant="outlined"
        />
      </div>
      <div id="item-3">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Fødselsdag
        </InputLabel>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="">Dag</InputLabel>
            <Select
              labelId=""
              id=""
              value={age} // skal erstattes med dag
              label=""
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              <MenuItem value={27}>27</MenuItem>
              <MenuItem value={28}>28</MenuItem>
              <MenuItem value={29}>29</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={31}>31</MenuItem>
            </Select>
            <FormHelperText className="FormHelperText">
              Vises ikke offentligt.
            </FormHelperText>
          </FormControl>
        </Box>
      </div>
      <div id="item-4">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          &nbsp;
        </InputLabel>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="">Måned</InputLabel>
            <Select
              labelId=""
              id=""
              value={age} // skal erstattes med måned
              label=""
              onChange={handleChange}
            >
              <MenuItem value={10}>Januer</MenuItem>
              <MenuItem value={20}>Februar</MenuItem>
              <MenuItem value={30}>Marts</MenuItem>
              <MenuItem value={10}>April</MenuItem>
              <MenuItem value={20}>Maj</MenuItem>
              <MenuItem value={30}>Juni</MenuItem>
              <MenuItem value={10}>Juli</MenuItem>
              <MenuItem value={20}>August</MenuItem>
              <MenuItem value={30}>September</MenuItem>
              <MenuItem value={10}>Oktober</MenuItem>
              <MenuItem value={20}>November</MenuItem>
              <MenuItem value={30}>December</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div id="item-5">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          &nbsp;
        </InputLabel>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="">År</InputLabel>
            <Select
              labelId=""
              id=""
              value={age} // skal erstattes med år
              label=""
              onChange={handleChange}
            >
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div id="item-6">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Adresse
        </InputLabel>
        <TextField
          className="Textfield"
          id="demo-helper-text-misaligned"
          placeholder="F.eks. Prins Jørgens Gård 11, 1218 København"
        />
      </div>
      <div id="item-7">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Postnummer og by
        </InputLabel>
        <TextField
          className="Textfield"
          id="demo-helper-text-misaligned"
          label="Postnummer"
        />
      </div>
      <div id="item-8">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          &nbsp;
        </InputLabel>
        <TextField
          className="Textfield"
          id="demo-helper-text-misaligned"
          label="By"
        />
      </div>
      <div id="item-9">
        <InputLabel
          className="InputLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Mobiltelefonnummer
        </InputLabel>
        <TextField
          className="Textfield"
          id="demo-helper-text-misaligned"
          label="Mobiltelefonnummer"
        />
      </div>
      <div id="item-10">
        <div className="EditProfilePicture">
          <InputLabel
            className="InputLabel"
            variant="standard"
            htmlFor="uncontrolled-native"
          >
            Billede
          </InputLabel>
          <Avatar className="Avatar" alt="Remy Sharp" src="" />
          <span>
            <Button variant="outlined">Vælg fil</Button>
            <p></p>
          </span>
        </div>
      </div>
      <div id="item-11">
        <Button variant="contained">Gem</Button>
      </div>
    </div>
  );
}

export default EditProfile;
