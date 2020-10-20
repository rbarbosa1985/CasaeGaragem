import styled from "styled-components";

export const ContBody = styled.div`
  flex-direction: column;
  display: flex;
`;

export const CardProduct = styled.div`
  flex-direction: column;
  display: flex;
  margin-bottom: 1vh;
  border-radius: 10px;
  background-color: var(--color-lightgray);
`;

export const HeaderCard = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: var(--color-black);
  color: var(--color-yellow);
  align-items: center;
`;

export const Id = styled.div`
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Descricao = styled.div`
  padding: 5px;
  flex: 5;
  display: flex;
  flex-direction: row;
`;

export const Fabricante = styled.div`
  padding: 5px;
  flex: 4;
  display: flex;
  flex-direction: row;
`;

export const Estoque = styled.div`
  padding: 5px;
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
  padding: 5px;
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
  padding: 5px;
`;

export const TitleHeader = styled.text`
  font-size: 22px;
  font-weight: bold;
  margin-right: 4px;
`;

export const TextHeader = styled.text`
  font-size: 22px;
`;

export const Title = styled.text`
  font-size: 18px;
  font-weight: bold;
  margin-right: 4px;
`;

export const Text = styled.text`
  font-size: 18px;
`;
