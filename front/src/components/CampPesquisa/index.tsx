import React, { useState, ChangeEvent } from "react";
import {
  HeaderBody,
  DivPesq,
  DivData,
  Pesquisa,
  Data,
  Botao,
  customStyles,
} from "./style";
import Modal from "react-modal";
import Excel from "../../pages/Excel/index";
import { Link } from "react-router-dom";
import { Filters, Props, Products } from "./types";
import api from "../../services/api";

function Home({ goToFilters, dados }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [model, setModel] = useState<Filters>({
    product: "",
    manufacture: "",
    provider: "",
    date: ""
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  function openModal() {
    setIsOpen(true);
    Modal.setAppElement("body");
    excel();
  }

  function closeModal() {
    setIsOpen(false);
  }

  function action(e: ChangeEvent<HTMLInputElement>) {
    goToFilters(model);
  }

  const [records, setRecords] = useState<Products[]>();

  function excel() {
    api.get(`${dados}`).then((response) => {
      setRecords(response.data);
    });
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
          <Excel content={records} />
          <Link to={`/${dados}`}>
            <Botao> PDF </Botao>
          </Link>
        </div>
      </Modal>

      <HeaderBody>
        <DivPesq>
          <Pesquisa
            placeholder="PRODUTO"
            name="product"
            value={model.product}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />
          <Pesquisa
            placeholder="FORNECEDOR"
            name="provider"
            value={model.provider}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />
          <Pesquisa
            placeholder="FÁBRICA"
            name="manufacture"
            value={model.manufacture}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />
        </DivPesq>
        <DivData>
          <Data
            type="date"
            name="date"
            id="date"
            value={model.date}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />
          <Botao onClick={action}>Pesquisar</Botao>
          <Botao onClick={openModal}>Exportar</Botao>
        </DivData>
      </HeaderBody>
    </>
  );
}

export default Home;
