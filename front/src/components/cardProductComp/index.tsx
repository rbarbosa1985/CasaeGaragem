import React, {useEffect, useState} from "react";
import {RecordResponse} from "./types";
import api from "../../services/api";
import Pagination from '../Pagination/index';
import {
  ContBody,
  CardProduct,
  InfCard,
  InfFornecedor,
  InfCont,
  InfContColumn,
  Cont,
  ContTitle,
  Text,
} from "./style";

function CardProductComp() {
  
  const [records, setRecords] = useState<RecordResponse>();
  const [ activePage, setActivePage ] = useState(0);

  useEffect(() => {
    api.get(`/products?linesPerPage=4&page=${activePage}`).then( response => {setRecords(response.data) });
  }, [activePage])

    const handlePageChange = (index: number) => {
    setActivePage(index);
}

  return (
    <>
      <ContBody>
      {records?.content.map(product =>(
        <CardProduct>
          <InfCard>
              <Text>CODIGO: {product?.id}</Text>
              <Text>DESCRICAO: </Text>
              <Text>{product?.descricao}</Text>
              <Text>FABRICANTE: {product?.unvenda}</Text>
              <Text>QTD ESTOQUE:</Text>
              <Text>{product?.quantidade}</Text>
          </InfCard>
          <InfFornecedor>
          <Text>FORNCEDOR 01:</Text>
            <Text>21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA</Text>
            <Text>FORNCEDOR 02:</Text>
            <Text>21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA</Text>
            <Text>FORNCEDOR 03:</Text>
            <Text>21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA</Text>
          </InfFornecedor>
          <InfCont>
            <InfContColumn>
              <Cont>
                <ContTitle>Giro de estoque</ContTitle>
                <Text>10</Text>
              </Cont>
              <Cont>
                <ContTitle>Estoque mínimo</ContTitle>
                <Text>20</Text>
              </Cont>
              <Cont>
                <ContTitle>Estoque máximo</ContTitle>
                <Text>30</Text>
              </Cont>
            </InfContColumn>
            <InfContColumn>
              <Cont>
                <ContTitle>Média de venda 2019</ContTitle>
                <Text>40</Text>
              </Cont>
              <Cont>
                <ContTitle>Média de venda mensal</ContTitle>
                <Text>50</Text>
              </Cont>
              <Cont>
                <ContTitle>Média de compra</ContTitle>
                <Text>60</Text>
              </Cont>
            </InfContColumn>
          </InfCont>
        </CardProduct>
        ))}
      </ContBody>
      <Pagination activePage={activePage} totalPages={records?.totalPages} goToPage={handlePageChange} />
    </>
  );
}

export default CardProductComp;
