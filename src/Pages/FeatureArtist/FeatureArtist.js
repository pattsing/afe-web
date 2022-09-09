import { Container } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import { useMediaQuery } from "react-responsive";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "./FeatureArtist.css";
import Footer from "../../Components/Footer/Footer";

const FeatureArtist = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
        <div>
            <NewNavBar></NewNavBar>

            {/* <Container> */}
            <div
                className={isMobile ? "buyNFT-wrapper-mobile" : "buyNFT-wrapper"}
                id="buyNFT"
            >
                <div className="doc-wrapper">
                    <Document
                        file="vasan-cv.pdf"
                    >
                        <Page pageNumber={1} scale={isMobile ? 0.6 : 2} />
                    </Document>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default FeatureArtist;
