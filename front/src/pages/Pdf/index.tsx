import React, { useEffect, useState } from "react";
import api from "../../services/api";
import LogoImg from "../../assets/logo.png";
import { Header, Logo, Body, styles } from "./style";
import MyDocument from "../../components/Pdf/MyDocument";
import { PDFViewer } from "@react-pdf/renderer";
import { Products } from "./types";
import {useHistory} from "react-router-dom";

function Pdf() {

  const dados = useHistory();

  const [records, setRecords] = useState<Products[]>();

  useEffect(() => {
    api.get(`${dados.location.pathname}`).then((response) => {
      setRecords(response.data);
    });
  }, [dados]);


  return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo" />
      </Header>
      <Body>
        <PDFViewer style={styles.pdfviewer}>
          <MyDocument content={records} />
        </PDFViewer>
      </Body>
    </>
  );
}

export default Pdf;
