import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  user_id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleCreateConnection() {
    api.post('connections', {
      user_id: teacher.user_id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a
          target="__blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={handleCreateConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
