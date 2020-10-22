import React, { useState } from "react";
import { HeaderBody, Pesquisa, Data, Botao, customStyles } from "./style";
import Modal from "react-modal";
import Excel from "../../pages/Excel/index";
import { Link } from "react-router-dom";
import {RecordResponse} from "./types";



function Home({ content }: RecordResponse) {
  
   const [modalIsOpen, setIsOpen] = useState(false);
   const [dataInicial, setDataInicial] = useState('');
   const [fabrica, setFabrica] = useState('');

   function openModal() {
     setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function action() {
    console.log()
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
        <Pesquisa placeholder="FÁBRICA" value={fabrica} onChange={ (text) => setFabrica(text)/>
        <Data type="date" value={dataInicial} onChange={ (text) => setDataInicial(text)} />
        <Data type="date" />
        <Botao onClick={action}>Pesquisar</Botao>
        <Botao onClick={openModal}>Exportar</Botao>
      </HeaderBody>
    </>
  );
}

export default Home;
