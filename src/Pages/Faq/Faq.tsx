import { SyntheticEvent, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import translation from "../../Locals/en.json";
import style from "./Faq.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import faqData from "../../Data/FAQData.json";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const trans = translation.FaqPage;
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <NavBar />
      <Typography
        variant="h1"
        align="center"
        component="div"
        gutterBottom
        className={style.header}
      >
        {trans.title}
      </Typography>
      <div style={{ padding: "0vw 5vw" }}>
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
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
