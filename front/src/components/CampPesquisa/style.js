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
  @media (max-width: 1200px) {
    flex-direction: column;
    display: flex;
    border-radius: 1vw;
  }
`;
export const DivPesq = styled.div`
  display: flex;
  flex: 3;
  flex-direction: row;
  justify-content: space-between;
`;
export const DivData = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
`;

export const Pesquisa = styled.input`
  flex: 1;
  margin: 0.35vw;
  padding: 0.35vw;
  font-size: 1vw;
  height: 1.75vw;
  border: none;
  border-radius: 0.35vw;
  @media (max-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (max-width: 900px) {
    margin: 0.7vw;
    font-size: 2vw;
    height: 2.25vw;
  }
  @media (max-width: 650px) {
    font-size: 2.5vw;
    height: 2.75vw;
  }
  @media (max-width: 520px) {
    height: 4.25vw;
  }
`;

export const Data = styled.input`
  flex: 2;
  margin: 0.35vw;
  padding: 0.35vw;
  font-size: 1vw;
  height: 1.75vw;
  border: none;
  border-radius: 0.35vw;
  @media (max-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (max-width: 900px) {
    margin: 0.7vw;
    font-size: 2vw;
    height: 2.25vw;
  }
  @media (max-width: 650px) {
    font-size: 2.5vw;
    height: 2.75vw;
  }
  @media (max-width: 520px) {
    height: 4.25vw;
  }
`;

export const Botao = styled.button`
  display: flex;
  margin: 0.35vw;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: bold;
  color: var(--color-black);
  padding: 0.35vw;
  font-size: 1vw;
  height: 2.5vw;
  border: none;
  border-radius: 0.35vw;
  background-color: var(--color-yellow);
  &:hover {
    background-color: var(--color-yellow2);
    transition: 0.3s all ease-out;
  }
  @media (max-width: 1200px) {
    font-size: 1.5vw;
  }
  @media (max-width: 900px) {
    margin: 0.7vw;
    font-size: 2vw;
    height: 3vw;
  }
  @media (max-width: 650px) {
    font-size: 2.5vw;
    height: 3.5vw;
  }
  @media (max-width: 520px) {
    height: 5vw;
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
