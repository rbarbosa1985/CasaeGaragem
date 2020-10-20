import React from "react";
import LogoImg from "../../assets/logo.png";
import CardProductComp from "../../components/cardProductComp/index";
import CampPesquisa from "../../components/CampPesquisa";
import { Header, Logo, Body} from "./style";

  const Home = () => {

    return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo" />
      </Header>
      <Body>
        <CampPesquisa />
        <CardProductComp/>
      </Body>
    </>
  );
}

export default Home;
