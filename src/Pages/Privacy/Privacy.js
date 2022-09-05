import { Container } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import translation from "../../Locals/en.json";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import { useMediaQuery } from "react-responsive";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "./Privacy.css";
import Footer from "../../Components/Footer/Footer";

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

const Privacy = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const trans = translation.FaqPage;
  const [file, setFile] = useState('./privacy_policy.pdf');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );

  return (
    <div>
      <NewNavBar></NewNavBar>

      <Container>
        <div
          className={isMobile ? "buyNFT-wrapper-mobile" : "buyNFT-wrapper"}
          id="buyNFT"
        >
          <div className="title">Privacy</div>
          <nav>
            <button onClick={goToPrevPage}>Prev</button>
            <button onClick={goToNextPage}>Next</button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </nav>
          <Document
            file="privacy.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </Container>
    </div>
  );
};
export default Privacy;
