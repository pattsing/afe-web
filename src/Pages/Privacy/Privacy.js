import { Container } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import translation from "../../Locals/en.json";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import { useMediaQuery } from "react-responsive";
import { Document, Page } from "react-pdf";

import "./Privacy.css";
import Footer from "../../Components/Footer/Footer";

const Privacy = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const trans = translation.FaqPage;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <NewNavBar></NewNavBar>

      <Container>
        <div
          className={isMobile ? "buyNFT-wrapper-mobile" : "buyNFT-wrapper"}
          id="buyNFT"
        >
          <div className="title">Privacy</div>
          <Document file="https://www.afe-nft.com/PRIVACY-POLICY-AFE-NFT.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </Container>
    </div>
  );
};
export default Privacy;
