import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Ofte stillede spørgsmål" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Faq() {
  return (
    <main>
      <section className="FAQHeader">
        <p className="caption">Har du brug for hjælp?</p>
        <h1>Hyppige spørgsmål og svar 🤔</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          distinctio?
        </p>
      </section>
      <div className="accordion-group">
        <h2>Generelle spørgsmål</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </main>
  );
}
