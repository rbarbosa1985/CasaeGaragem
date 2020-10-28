import styled from "styled-components";

export const Header = styled.div`
  height: 5vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    height: 6vw;
  }
  @media (max-width: 800px) {
    height: 7vw;
  }
  @media (max-width: 650px) {
    height: 8vw;
  }
`;

export const Logo = styled.img`
  height: 4vw;
  width: auto;
  @media (max-width: 1200px) {
    height: 5vw;
  }
  @media (max-width: 800px) {
    height: 6vw;
  }
  @media (max-width: 650px) {
    height: 7vw;
  }
`;

export const Body = styled.div`
  flex: 1;
  margin: 0px 5vw;
`;
