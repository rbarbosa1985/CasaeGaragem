import styled from "styled-components";
import { StyleSheet } from "@react-pdf/renderer";

export const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;

export const Body = styled.div`
  flex: 1;
  margin: 0px 5vh;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-bottom: 1vh;
`;

export const styles = StyleSheet.create({
  pdfviewer: {
    width: "80%",
    height: "500px",
  },
});
