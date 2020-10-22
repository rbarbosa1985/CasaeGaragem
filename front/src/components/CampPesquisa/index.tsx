import React, { useState } from "react";
import { HeaderBody, Pesquisa, Data, Botao, customStyles } from "./style";
import Modal from "react-modal";
import Excel from "../../pages/Excel/index";
import { Link } from "react-router-dom";
import {RecordResponse} from "./types";



function Home({ content }: RecordResponse) {
  
   const [modalIsOpen, setIsOpen] = useState(false);
   function openModal() {
     setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Exportar"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Excel content={content}/>
          <Link to="pdf" >
            <Botao> PDF </Botao>
          </Link>
        </div>
      </Modal>

      <HeaderBody>
        <Pesquisa placeholder="PRODUTO" />
        <Pesquisa placeholder="FORNECEDOR" />
        <Pesquisa placeholder="FÁBRICA" />
        <Data type="date" />
        <Data type="date" />
        <Botao>Pesquisar</Botao>
        <Botao onClick={openModal}>Exportar</Botao>
      </HeaderBody>
    </>
  );
}

export default Home;
