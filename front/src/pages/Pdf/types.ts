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
  giro: number,
  estoque_min: number,
  estoque_max: number,
  media_anual: number,
  media_mensal: number,
  media_venda: number,
  manufacture: {
      id: number,
      name: string
  }
  providers: Providers[];
};

export type Providers = {
  id: number;
  name: string;
}