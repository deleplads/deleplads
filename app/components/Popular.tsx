"use client";
import BasicCard from "./Parkingspots/Cards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Popular() {
  return (
    <section className="popular">
      <div className="popularInner">
        <div className="buttonFiltration">
          <Button
            variant="outlined"
            sx={{ fontSize: "16px", textTransform: "initial" }}
          >
            Alle regioner
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "16px", textTransform: "initial" }}
          >
            Region Hovedestaden
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "16px", textTransform: "initial" }}
          >
            Region Sjælland
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "16px", textTransform: "initial" }}
          >
            Region Nordjylland
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "16px", textTransform: "initial" }}
          >
            Region Midtjylland
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "16px", textTransform: "initial" }}
          >
            Region Syddanmark
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "16px", textTransform: "initial" }}
          >
            Filtre
          </Button>
        </div>
        <div className="gallery">
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
        </div>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination count={10} size="large" color="primary" />
          </Stack>
        </div>
      </div>
    </section>
  );
}
export default Popular;
