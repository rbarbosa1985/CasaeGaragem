import React from "react";
import { RecordResponse } from "./types";
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

function CardProductComp({ content }: RecordResponse) {
  var data = new Date();
  var ano4 = data.getFullYear() -1;

  return (
    <>
      <ContBody>
        {content?.map((product) => (
          <CardProduct key={product?.id}>
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
                <TextHeader>{product?.manufacture}</TextHeader>
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
                  <Text>{product?.provider1}</Text>
                </InfFornecedor>
                <InfFornecedor>
                  <Title>Fornecedor 02:</Title>
                  <Text>{product?.provider2}</Text>
                </InfFornecedor>
                <InfFornecedor>
                  <Title>Fornecedor 03:</Title>
                  <Text>{product?.provider3}</Text>
                </InfFornecedor>
              </Fornecedor>
              <Cont>
                <ContRow>
                  <InfCont>
                    <Title>Giro de estoque:</Title>
                    <Text>{product?.giro.toFixed(1)}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Estoque mínimo:</Title>
                    <Text>{product?.estoque_min.toFixed(1)}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Estoque máximo:</Title>
                    <Text>{product?.estoque_max.toFixed(1)}</Text>
                  </InfCont>
                </ContRow>
                <ContRow>
                  <InfCont>
                    <Title>Média de venda {ano4}:</Title>
                    <Text>{product?.media_anual.toFixed(1)}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Média de venda mensal:</Title>
                    <Text>{product?.media_mensal.toFixed(1)}</Text>
                  </InfCont>
                  <InfCont>
                    <Title>Média de venda diária:</Title>
                    <Text>{product?.media_venda.toFixed(1)}</Text>
                  </InfCont>
                </ContRow>
              </Cont>
            </BodyCard>
          </CardProduct>
        ))}
      </ContBody>
    </>
  );
}

export default CardProductComp;
