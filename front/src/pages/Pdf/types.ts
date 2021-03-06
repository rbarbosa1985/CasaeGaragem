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
  manufacture:  string,
  provider1: string,
  provider2: string,
  provider3: string,
};

export type Providers = {
  id: number;
  name: string;
}