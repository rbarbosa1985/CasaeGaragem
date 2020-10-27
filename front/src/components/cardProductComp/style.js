import styled from "styled-components";

export const ContBody = styled.div`
  flex-direction: column;
  display: flex;
`;

export const CardProduct = styled.div`
  flex-direction: column;
  display: flex;
  margin-bottom: 0.5vw;
  border-radius: 0.5vw;
  background-color: var(--color-lightgray);
`;

export const HeaderCard = styled.div`
  border-radius: 0.5vw 0.5vw 0px 0px;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: var(--color-black);
  color: var(--color-yellow);
  align-items: center;
`;

export const Id = styled.div`
  padding: 0.35vw;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Descricao = styled.div`
  padding: 0.35vw;
  flex: 5;
  display: flex;
  flex-direction: row;
`;

export const Fabricante = styled.div`
  padding: 0.35vw;
  flex: 4;
  display: flex;
  flex-direction: row;
`;

export const Estoque = styled.div`
  padding: 0.35vw;
  flex: 2;
  display: flex;
  flex-direction: row;
`;

export const BodyCard = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
`;

export const Fornecedor = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfFornecedor = styled.div`
  padding: 0.35vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Cont = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const InfCont = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.35vw;
`;

export const TitleHeader = styled.div`
  font-size: 1.2vw;
  font-weight: bold;
  margin-right: 0.35vw;
`;

export const TextHeader = styled.div`
  font-size: 1.2vw;
`;

export const Title = styled.div`
  font-size: 1vw;
  font-weight: bold;
  margin-right: 0.35vw;
`;

export const Text = styled.div`
  font-size: 1vw;
`;
