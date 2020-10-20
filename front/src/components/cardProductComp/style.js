import styled from "styled-components";

export const ContBody = styled.div`
  flex-direction: column;
  display: flex;
`;

export const CardProduct = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 1vh;
  padding: 1vh 2vh;
  border-radius: 10px;
  background-color: var(--color-lightgray);
`;

export const InfCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-between;
`;

export const InfFornecedor = styled.div`
  flex: 1;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const InfCont = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const InfContColumn = styled.div`
  width: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContTitle = styled.text`
  font-weight: bold;
  font-size: 14px;
`;

export const Text = styled.text`
  font-size: 14px;
`;
