import React, {useState} from "react";
import { HeaderBody, Pesquisa, Data, Botao } from "./style";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Excel from '../../pages/Excel/index'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function Home(OnPress) {

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal(){
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
          <div style={{display: 'flex', flexDirection: 'row'}}>
              <Excel/>
              <Link to="pdf">
                <Botao>  PDF  </Botao>
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
