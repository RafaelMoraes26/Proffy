import React from 'react';
import iconWhatsapp from './../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem() {

    return (
        <article className="teacher-item">
            <header>
                <img 
                    src="https://images.unsplash.com/photo-1530645298377-82c8416d3f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="João Mario"
                />
                <div>
                    <strong>João Mario</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                 Descrição objetiva
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tellus a nisl facilisis accumsan nec vitae turpis. Donec blandit bibendum hendrerit.    
            </p>
            <footer>
                <p> 
                    Preço/hora
                    <strong> R$ 80,00 </strong>
                </p>
                <button type="button">
                    <img src={iconWhatsapp} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );

}

export default TeacherItem;