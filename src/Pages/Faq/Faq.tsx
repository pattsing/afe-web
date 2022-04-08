import { SyntheticEvent, useState } from "react";
import Container from "@mui/material/Container";
import NavBar from "../../Components/NavBar";
import translation from "../../Locals/en.json";
import style from "./Faq.module.css";
import { Accordion, AccordionSummary, Typography } from "@mui/material";

const Faq = () => {
  const trans = translation.FaqPage;
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div style={{ backgroundColor: "gray" }}>
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
      {/* <div>
        <Accordion>
          <AccordionSummary>Faq 1</AccordionSummary>
        </Accordion>
      </div> */}
    </div>
  );
};

export default Faq;
