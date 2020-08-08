import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars2.githubusercontent.com/u/10280312?s=460&u=353bf0df7bc3f6867d881749394f19fe71927607&v=4"
          alt="Diego Goulart"/>
        <div>
          <strong>Diego Goulart</strong>
          <span>História</span>
        </div>
      </header>
      <p>
        Entusista pela história das grandes gerras em todos os seus aspectos.
        <br/><br/>
        Apaixonado pelos detalhes escondidos em documentos secretos que contam os fatos
        ocorridos durante as grandes guerras.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;