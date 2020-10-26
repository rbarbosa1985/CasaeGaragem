import React , { useEffect, useState } from "react";
import { RecordResponse, Filters } from "./types";
import api from "../../services/api";
import LogoImg from "../../assets/logo.png";
import CardProductComp from "../../components/cardProductComp/index";
import CampPesquisa from "../../components/CampPesquisa";
import { Header, Logo, Body } from "./style";
import Pagination from "../../components/Pagination/index";

const Home = () => {

  var data = new Date();
  var dia     = data.getDate(); 
  var mes     = data.getMonth()+1;
  var ano4    = data.getFullYear();
  var str_data = ano4 + '-' + ((mes<10) ? '0'+mes : mes ) + '-' + dia;

  const [records, setRecords] = useState<RecordResponse>();
  
  const [product,setProduct] = useState('')
  const [manufacture,setManufacture] = useState('')
  const [provider,setProvider] = useState('')
  const [date,setDate] = useState(str_data)
  const [date2,setDate2] = useState(str_data)
  const [activePage, setActivePage] = useState(0);
  const [dados, setDados] = useState('');

  

  useEffect(() => {
   
    function getDados() {
    api.get(`/products/fiters/${product}&${provider}&${manufacture}&${date}&${date2}?linesPerPage=4&page=${activePage}`).then((response) => {
      setDados(`products/pdf/${product}&${provider}&${manufacture}&${date}&${date2}`);
      setRecords(response.data);
    });
    }
    getDados();
  }, [activePage, date, date2, manufacture, product, provider]);

  const handleFilterChange = (filter: Filters) => {
    setProduct(filter.product);
    setManufacture(filter.manufacture);
    setProvider(filter.provider);
    if (filter.date === ''){
      setDate(str_data);
    }
    else {
      setDate(filter.date);
    }
    if (filter.date2 === ''){
      setDate(str_data);
    }
    else{
      setDate2(filter.date2);
    }
    
    
  }

  const handlePageChange = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo" />
      </Header>
      <Body>
        <CampPesquisa goToFilters={handleFilterChange} dados={dados}/>
        <CardProductComp  content={records?.content} />
        <Pagination activePage={activePage} totalPages={records?.totalPages} goToPage={handlePageChange} />
      </Body>
    </>
  );
};

export default Home;
