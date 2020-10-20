import React from "react";
import ReactExport from "react-export-excel";
import { Botao } from "../../components/CampPesquisa/style";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
  {
    id: 12,
    descricao: "TELEVISÃO 49",
    fabricante: 2,
    estoque: 2,
    forn1: "21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA",
    forn2: "21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA",
    forn3: "21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA",
    giro: 10,
    estmin: 20,
    estmax: 30,
    medanu: 40,
    medmen: 50,
    medcom: 60,
  },
];

function Excel() {
  return (
    <ExcelFile element={<Botao>EXCEL</Botao>}>
      <ExcelSheet data={dataSet1} name="Produtos">
        <ExcelColumn label="Id" value="id" />
        <ExcelColumn label="Descricao" value="descricao" />
        <ExcelColumn label="Fabricante" value="fabricante" />
        <ExcelColumn label="Estoque" value="estoque" />
        <ExcelColumn label="Fornecedor 01" value="forn1" />
        <ExcelColumn label="Fornecedor 02" value="forn2" />
        <ExcelColumn label="Fornecedor 03" value="forn3" />
        <ExcelColumn label="Giro de estoque" value="giro" />
        <ExcelColumn label="Estoque minimo" value="estmin" />
        <ExcelColumn label="Estoque maximo" value="estmax" />
        <ExcelColumn label="Media de venda anual" value="medanu" />
        <ExcelColumn label="Media de venda mensal" value="medmen" />
        <ExcelColumn label="Media de compra" value="medcom" />
      </ExcelSheet>
    </ExcelFile>
  );
}

export default Excel;
