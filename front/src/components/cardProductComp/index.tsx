import React, { useEffect, useState } from "react";
import { RecordResponse } from "./types";
import api from "../../services/api";
import Pagination from "../Pagination/index";
import {
  ContBody,
  CardProduct,
  HeaderCard,
  Id,
  Descricao,
  Fabricante,
  Estoque,
  BodyCard,
  Fornecedor,
  InfFornecedor,
  Cont,
  ContRow,
  InfCont,
  TitleHeader,
  TextHeader,
  Title,
  Text,
} from "./style";

function CardProductComp() {
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
      <ContBody>
        {records?.content.map((product) => (
          <CardProduct>
            <HeaderCard>
              <Id>
                <TitleHeader>Id:</TitleHeader>
                <TextHeader>{product?.id}</TextHeader>
              </Id>
              <Descricao>
                <TitleHeader>Descrição:</TitleHeader>
                <TextHeader>{product?.descricao}</TextHeader>
              </Descricao>
              <Fabricante>
                <TitleHeader>Fabricante:</TitleHeader>
                <TextHeader>{product?.manufacture.name}</TextHeader>
              </Fabricante>
              <Estoque>
                <TitleHeader>Estoque:</TitleHeader>
                <TextHeader>{product?.quantidade}</TextHeader>
              </Estoque>
            </HeaderCard>
            <BodyCard>
              <Fornecedor>
                <InfFornecedor>
                  <Title>Fornecedor 01:</Title>
                  <Text>{product?.providers[0]?.name}</Text>
                </InfFornecedor>
                <InfFornecedor>
                  <Title>Fornecedor 02:</Title>
                  <Text>{product?.providers[1]?.name}</Text>
                </InfFornecedor>
                <InfFornecedor>
                  <Title>Fornecedor 03:</Title>
                  <Text>{product?.providers[2]?.name}</Text>
                </InfFornecedor>
              </Fornecedor>
              <Cont>
                <ContRow>
                  <InfCont>
                    <Title>Giro de estoque:</Title>
                    <Text>{product?.giro}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Estoque mínimo:</Title>
                    <Text>{product?.estoque_min}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Estoque máximo:</Title>
                    <Text>{product?.estoque_max}</Text>
                  </InfCont>
                </ContRow>
                <ContRow>
                  <InfCont>
                    <Title>Média de venda anual:</Title>
                    <Text>{product?.media_anual}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Média de venda mensal:</Title>
                    <Text>{product?.media_mensal}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Média de compra:</Title>
                    <Text>{product?.media_venda}</Text>
                  </InfCont>
                </ContRow>
              </Cont>
            </BodyCard>
          </CardProduct>
        ))}
      </ContBody>
      <Pagination
        activePage={activePage}
        totalPages={records?.totalPages}
        goToPage={handlePageChange}
      />
    </>
  );
}

export default CardProductComp;
