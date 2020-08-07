import React from 'react';
import iconWhatsapp from './../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    cost: number;
    bio: string;
    name: string;
    avatar: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ( { teacher }) => {

    function createNewConnection() {
        api.post('/connections', { user_id: teacher.id});
    }

    return (
        <article className="teacher-item">
            <header>
                <img 
                    src={teacher.avatar} 
                    alt={teacher.name}
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p> {teacher.bio} </p>
            <footer>
                <p> 
                    Preço/hora
                    <strong> R$ {teacher.cost} </strong>
                </p>
                <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={createNewConnection} 
                    href={`http://wa.me/55${teacher.whatsapp}?text=Olá,%20tenho%20interesse%20em%20ter%20aulas%20de%20${teacher.subject}!`}
                >
                    <img src={iconWhatsapp} alt="Whatsapp"/>
                    Entrar em Contato
                </a>
            </footer>
        </article>
    );

}

export default TeacherItem;