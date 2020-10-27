import styled from "styled-components";

export const HeaderBody = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: auto;
  margin-bottom: 1vw;
  padding: 0.5vw 1vw;
  background-color: var(--color-black);
  border-radius: 0.5vw;
  align-items: center;
`;

export const Pesquisa = styled.input`
  flex: 6;
  margin: 0.35vw;
  padding: 0.35vw;
  font-size: 1vw;
  height: 1.75vw;
  border: none;
  border-radius: 0.35vw;
  /* @media (max-width: 1284px) {
    padding: 2px;
    font-size: 12px;
    height: 25px;
  }
  @media (max-width: 1088px) {
    padding: 1px;
    font-size: 9px;
  } */
`;

export const Data = styled.input`
  flex: 4;
  margin: 0.35vw;
  padding: 0.35vw;
  font-size: 1vw;
  height: 1.75vw;
  border: none;
  border-radius: 0.35vw;
  /* @media (max-width: 1284px) {
    padding: 2px;
    font-size: 12px;
    height: 25px;
  }
  @media (max-width: 1088px) {
    padding: 1px;
    font-size: 9px;
  } */
`;

export const Botao = styled.button`
  display: flex;
  margin: 0.35vw;
  align-items: center;
  justify-content: center;
  flex: 2;
  font-weight: bold;
  color: var(--color-black);
  padding: 0.35vw;
  font-size: 1vw;
  height: 2.25vw;
  border: none;
  border-radius: 0.35vw;
  background-color: var(--color-yellow);
  /* @media (max-width: 1284px) {
    padding: 2px;
    font-size: 12px;
    height: 30px;
  }
  @media (max-width: 1088px) {
    padding: 1px;
  } */
  &:hover {
    background-color: var(--color-yellow2);
    transition: 0.3s all ease-out;
  }
`;
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};