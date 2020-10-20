import styled from "styled-components";

export const HeaderBody = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: auto;
  margin-bottom: 2vh;
  padding: 1vh 2vh;
  background-color: var(--color-black);
  border-radius: 10px;
  align-items: center;
`;

export const Pesquisa = styled.input`
  flex: 6;
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  height: 30px;
  border: none;
  border-radius: 5px;
  @media (max-width: 1284px) {
    padding: 2px;
    font-size: 12px;
    height: 25px;
  }
  @media (max-width: 1088px) {
    padding: 1px;
    font-size: 9px;
  }
`;

export const Data = styled.input`
  flex: 4;
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  height: 30px;
  border: none;
  border-radius: 5px;
  @media (max-width: 1284px) {
    padding: 2px;
    font-size: 12px;
    height: 25px;
  }
  @media (max-width: 1088px) {
    padding: 1px;
    font-size: 9px;
  }
`;

export const Botao = styled.button`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
  flex: 2;
  font-weight: bold;
  color: var(--color-black);
  padding: 5px;
  font-size: 16px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-yellow);
  @media (max-width: 1284px) {
    padding: 2px;
    font-size: 12px;
    height: 30px;
  }
  @media (max-width: 1088px) {
    padding: 1px;
  }
  &:hover {
    background-color: var(--color-yellow2);
    transition: 0.3s all ease-out;
  }
`;