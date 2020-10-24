import React from "react";
import ReactExport from "react-export-excel";
import { Botao } from "../../components/CampPesquisa/style";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(records)  {

  return (
    <ExcelFile element={<Botao>EXCEL</Botao>}>
      <ExcelSheet data={records.content} name="Produtos">
        <ExcelColumn label="Id" value="id" />
        <ExcelColumn label="Descricao" value="descricao" />
        <ExcelColumn label="Fabricante" value="manufacture.name" />
        <ExcelColumn label="Estoque" value="quantidade" />
        <ExcelColumn label="Fornecedor 01" value="providers[0].name" />
        <ExcelColumn label="Fornecedor 02" value="providers[1].name" />
        <ExcelColumn label="Fornecedor 03" value="providers[2].name" />
        <ExcelColumn label="Giro de estoque" value="giro" />
        <ExcelColumn label="Estoque minimo" value="estoque_min" />
        <ExcelColumn label="Estoque maximo" value="estoque_max" />
        <ExcelColumn label="Media de venda anual" value="media_anual" />
        <ExcelColumn label="Media de venda mensal" value="media_mensal" />
        <ExcelColumn label="Media de compra" value="media_venda" />
      </ExcelSheet>
    </ExcelFile>
  );
}

export default Excel;
