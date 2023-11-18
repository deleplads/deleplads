import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQAccordion() {
  return (
    <section className="FAQGeneral">
      <div className="inner">
        <h2>Spørgsmål og svar</h2>
        <div>
          {faqData.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

// Data for FAQ

const faqData = [
  {
    question: "Hvad koster det at leje parkeringspladser?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "Hvad sker der, hvis lejer overskrider udlejningsperioden?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];
