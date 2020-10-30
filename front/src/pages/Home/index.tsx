import React, { useEffect, useState } from "react";
import { RecordResponse, Filters } from "./types";
import api from "../../services/api";
import LogoImg from "../../assets/logo.png";
import CardProductComp from "../../components/cardProductComp/index";
import CampPesquisa from "../../components/CampPesquisa";
import { Header, Logo, Body } from "./style";
import Pagination from "../../components/Pagination/index";

const Home = () => {
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano4 = data.getFullYear();
  var str_data = ano4 + "-" + (mes < 10 ? "0" + mes : mes) + "-" + dia;

  const [records, setRecords] = useState<RecordResponse>();

  const [product, setProduct] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [provider, setProvider] = useState("");
  const [date, setDate] = useState(str_data);
  const [activePage, setActivePage] = useState(0);
  const [dados, setDados] = useState(""); 
  const [year, setYear] = useState("2019"); 

  useEffect(() => {
    async function getDados() {
      await api
        .get(
          `/products/fiters/${product}&${provider}&${manufacture}&${date}&${year}?linesPerPage=4&page=${activePage}`
        )
        .then((response) => {
          setDados(
            `products/pdf/${product}&${provider}&${manufacture}&${date}&${year}`
          );
          setRecords(response.data);
        });
    }
    getDados();
  }, [activePage, date, manufacture, product, provider, year]);

  const handleFilterChange = (filter: Filters) => {
    setProduct(filter.product);
    setManufacture(filter.manufacture);
    setProvider(filter.provider);
    if (filter.date === "") {
      setDate(str_data);
    } else {
      setDate(filter.date);
      var i = 0;
      var aux = '';
      for (i = 0; i <4 ; i++){
        aux = aux + filter.date.charAt(i);
      }
      i = Number(aux);
      i=i-1;
      aux = String(i);
      setYear(aux);
    }
  };

  const handlePageChange = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo" />
      </Header>
      <Body>
        <CampPesquisa goToFilters={handleFilterChange} dados={dados} />
        <CardProductComp content={records?.content} year={year} />
        <Pagination
          activePage={activePage}
          totalPages={records?.totalPages}
          goToPage={handlePageChange}
        />
      </Body>
    </>
  );
};

export default Home;
