import React from "react";
import ReactExport from "react-export-excel";
import { Botao } from "../../components/CampPesquisa/style";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(records)  {
  console.log(records);
  return (
    <ExcelFile element={<Botao>EXCEL</Botao>}>
      <ExcelSheet data={records.content} name="Produtos">
        <ExcelColumn label="Id" value="id" />
        <ExcelColumn label="Descricao" value="descricao" />
        <ExcelColumn label="Fabricante" value="manufacture" />
        <ExcelColumn label="Estoque" value="quantidade" />
        <ExcelColumn label="Fornecedor 01" value="provider1" />
        <ExcelColumn label="Fornecedor 02" value="provider2" />
        <ExcelColumn label="Fornecedor 03" value="provider3" />
        <ExcelColumn label="Giro de estoque" value="giro" />
        <ExcelColumn label="Estoque minimo" value="estoque_min" />
        <ExcelColumn label="Estoque maximo" value="estoque_max" />
        <ExcelColumn label="Media de venda 2019" value="media_anual" />
        <ExcelColumn label="Media de venda mensal" value="media_mensal" />
        <ExcelColumn label="Media de venda diaria" value="media_venda" />
      </ExcelSheet>
    </ExcelFile>
  );
}

export default Excel;
