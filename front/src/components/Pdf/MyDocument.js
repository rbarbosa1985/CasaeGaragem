import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { styles } from "./style";

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.card}>
        <View style={styles.section}>
          <Text>CODIGO: 67</Text>
          <Text>DESCRICAO: </Text>
          <Text>TORQUES ARMADOR VERDE 10" (25CM)</Text>
          <Text>FABRICANTE: S.ROMAO</Text>
          <Text>QTD ESTOQUE:</Text>
          <Text>1.579</Text>
        </View>
        <View style={styles.section}>
          <Text>FORNCEDOR 01:</Text>
          <Text>21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA</Text>
          <Text>FORNECEDOR 02:</Text>
          <Text>21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA</Text>
          <Text>FORNECEDOR 3:</Text>
          <Text>21-INDUSTRIA DE FORJADOS SAO ROMAO LTDA</Text>
        </View>
        <View style={styles.section}>
          <Text>GIRO DE ESTOQUE: 10</Text>
          <Text>ESTOQUE MÍNIMO: 20</Text>
          <Text>ESTOQUE MÁXIMO: 30</Text>
          <Text>MEDIA DE VENDA ANUAL: 40</Text>
          <Text>MEDIA DE VENDA MENSAL: 50</Text>
          <Text>MEDIA DE COMPRA: 60</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
