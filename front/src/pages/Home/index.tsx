import React , { useEffect, useState } from "react";
import { RecordResponse } from "./types";
import api from "../../services/api";
import LogoImg from "../../assets/logo.png";
import CardProductComp from "../../components/cardProductComp/index";
import CampPesquisa from "../../components/CampPesquisa";
import { Header, Logo, Body } from "./style";
import Pagination from "../../components/Pagination/index";

const Home = () => {

  const [records, setRecords] = useState<RecordResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    api.get(`/products?linesPerPage=5&page=${activePage}`).then((response) => {
      setRecords(response.data);
    });
  }, [activePage]);

  const handlePageChange = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo" />
      </Header>
      <Body>
        <CampPesquisa content={records?.content} />
        <CardProductComp  content={records?.content} />
        <Pagination activePage={activePage} totalPages={records?.totalPages} goToPage={handlePageChange} />
      </Body>
    </>
  );
};

export default Home;
