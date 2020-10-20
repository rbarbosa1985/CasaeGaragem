export type RecordResponse = {
  content: Products[];
  totalPages: number;
};

export type Products = {
  id: number;
  codigoBarras: number;
  referencia: number;
  descricao: string;
  unvenda: string;
  uncompra: string;
  quantidadecx: number;
  quantidade: number;
};
