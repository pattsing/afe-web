import { ExpandMore } from "@mui/icons-material";
import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { SyntheticEvent, useState } from "react";
import translation from "../../Locals/en.json";
import faqData from "../../Data/FAQData.json";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";

import "./Faq.css";
import Footer from "../../Components/Footer/Footer";

const Faq = () => {
  const trans = translation.FaqPage;
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <NewNavBar></NewNavBar>
      <Container>
        <div className="faq-wrapper" id="faq">
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
                    style={{
                      fontFamily: `"Hind", sans-serif`,
                      fontSize: "1vw",
                    }}
                  >
                    {faq.answer.map((answer) => {
                      return <div>{answer}</div>;
                    })}
                    <a href={faq.link} className="faq-link" target="_blank">
                      {faq.link}
                    </a>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};
export default Faq;
