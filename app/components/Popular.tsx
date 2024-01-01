"use client";
import BasicCard from "./Parkingspots/Cards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Popular() {
  return (
    <section className="popular">
      <div className="popularInner">
        <div className="region-group">
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Alle regioner</Button>
            <Button variant="outlined">Region Hovedestaden</Button>
            <Button variant="outlined">Region Sjælland</Button>
            <Button variant="outlined">Region Nordjylland</Button>
            <Button variant="outlined">Region Midtjylland</Button>
            <Button variant="outlined">Region Syddanmark</Button>
            <Button variant="outlined">Filtre</Button>
          </Stack>
        </div>
        <span>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
        </span>
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
