import { ExpandMore } from "@mui/icons-material";
import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { SyntheticEvent, useState } from "react";
import translation from "../../Locals/en.json";
import faqData from "../../Data/FAQData.json";

import "./Faq.css";

const Faq = () => {
  const trans = translation.FaqPage;
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container style={{ padding: "5vw 10vw 0vw 10vw" }}>
      <div className="faq-wrapper">
        <div className="title">{trans.title}</div>
        <div className="list">
          {faqData.map((faq, index) => {
            return (
              <Accordion
                expanded={expanded === `faq-${index}`}
                onChange={handleChange(`faq-${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1bh-content"
                  id={`faq-question-${index}`}
                  style={{
                    fontFamily: `"Hind", sans-serif`,
                    fontSize: "1vw",
                    fontWeight: 600,
                  }}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails
                  style={{ fontFamily: `"Hind", sans-serif`, fontSize: "1vw" }}
                >
                  {faq.answer}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Faq;
