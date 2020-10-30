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
  @media (max-width: 768px) {
    margin-bottom: 1.5vw;
  }
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
  flex-direction: column;
`;

export const Descricao = styled.div`
  padding: 0.35vw;
  flex: 5;
  display: flex;
  flex-direction: column;
`;

export const Fabricante = styled.div`
  padding: 0.35vw;
  flex: 4;
  display: flex;
  flex-direction: column;
`;

export const Estoque = styled.div`
  padding: 0.35vw;
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const BodyCard = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
`;

export const Fornecedor = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: #e4e4e4;
`;

export const InfFornecedor = styled.div`
  flex: 1;
  padding: 0.35vw;
  display: flex;
  flex-direction: column;
`;

export const Cont = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const ContRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfCont = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.35vw;
`;

export const TitleHeader = styled.div`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  @media (max-width: 1024px) {
    font-size: 20px;
    margin-right: 0.7vw;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const TextHeader = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  max-width: 35vw;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    max-width: 33vw;
    font-size: 16px;
  }
  @media (max-width: 360px) {
    max-width: 33vw;
    font-size: 14px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 0.35vw;
  @media (max-width: 1024px) {
    font-size: 16px;
    margin-right: 0.7vw;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const Text = styled.div`
  font-size: 18px;
  max-width: 28vw;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    max-width: 26vw;
    font-size: 12px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;
