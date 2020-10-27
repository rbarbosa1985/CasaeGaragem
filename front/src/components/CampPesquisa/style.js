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
  /* @media (max-width: 1200px) {
    flex-direction: column;
    display: flex;
  } */
`;

export const Pesquisa = styled.input`
  flex: 6;
  margin: 0.35vw;
  padding: 0.35vw;
  font-size: 1vw;
  height: 1.75vw;
  border: none;
  border-radius: 0.35vw;
`;

export const Data = styled.input`
  flex: 4;
  margin: 0.35vw;
  padding: 0.35vw;
  font-size: 1vw;
  height: 1.75vw;
  border: none;
  border-radius: 0.35vw;
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
  height: 2.5vw;
  border: none;
  border-radius: 0.35vw;
  background-color: var(--color-yellow);
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
