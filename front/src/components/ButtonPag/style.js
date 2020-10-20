import styled from "styled-components";

export const Button = styled.button`
  bottom: 0px;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--color-black);
  font-size: 16px;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background-color: var(--color-yellow);
  &:hover {
    background-color: var(--color-black);
    color: var(--color-yellow);
    transition: 0.3s all ease-out;
  }
`;
