import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { styles } from "./style";
import {RecordResponse} from "./types";

// Create Document Component
const MyDocument = (content: RecordResponse) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
    {content.content?.map((product) => (
      <View style={styles.card}>
        <View style={styles.section}>
          <Text>CODIGO: {product.id} </Text>
          <Text>DESCRICAO: </Text>
          <Text style={styles.text} >{product.descricao}</Text>
          <Text style={styles.text}>FABRICANTE: {product.manufacture}</Text>
          <Text>QTD ESTOQUE:</Text>
          <Text>{product.quantidade}</Text>
        </View>
        <View style={styles.section}>
          <Text>FORNCEDOR 01:</Text>
          <Text style={styles.text}>{product?.provider1}</Text>
          <Text>FORNECEDOR 02:</Text>
          <Text style={styles.text}>{product?.provider2}</Text>
          <Text>FORNECEDOR 3:</Text>
          <Text style={styles.text}>{product?.provider3}</Text>
        </View>
        <View style={styles.section}>
    <Text>GIRO DE ESTOQUE: {product.giro}</Text>
          <Text>ESTOQUE MÍNIMO: {product.estoque_min}</Text>
          <Text>ESTOQUE MÁXIMO: {product.estoque_max}</Text>
          <Text>MEDIA DE VENDA ANUAL: {product.media_anual}</Text>
          <Text>MEDIA DE VENDA MENSAL: {product.media_mensal}</Text>
          <Text>MEDIA DE COMPRA: {product.media_venda}</Text>
        </View>
      </View>
    ))}
    </Page>
  </Document>
);

export default MyDocument;
