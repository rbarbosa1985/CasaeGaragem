import React from "react";
import LogoImg from "../../assets/logo.png";
import { Header, Logo, Body, styles } from "./style";
import MyDocument from "../../components/Pdf/MyDocument";
import { PDFViewer } from '@react-pdf/renderer';

function Pdf() {
  return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo" />
      </Header>
      <Body>
            <PDFViewer style={styles.pdfviewer}>
                <MyDocument />
            </PDFViewer>  
      </Body>
    </>
  );
}

export default Pdf;
