import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import imagenComunidad from '/assets/vecinos.jpg';
import imageJunta from '/assets/junta.jpg';
import imagesNoticias from '/assets/noticias.jpg';
import imagesChat from '/assets/chat.jpg';
import Footer from '../Footer/Footer';


const Dashboard = () => {
    return (
      <div className='dash'>
        <Navbar />
        <div className='dashboard-content'>
          <h1>¡Bienvenido a VecinoConecta!</h1>
          <p>¡Mantente al día con nuestro foro dónde todos los vecinos pueden aportar sus ideas, inquietudes o incluso organizar eventos, todo en un solo lugar! 
          Además puedes visitar nuestro directorio para conocer a tus vecinos y contactarlos.
          </p>
          <img className="img-comunidad" src={imagenComunidad} alt="Imagen de comunidad" />
          <h4>¡Descubre todas las funciones que VecinoConecta tiene para ofrecerte!</h4>
          <p>Registra tus eventos comunitarios, realiza pagos de servicios locales y mantente al tanto de todas las actividades en tu vecindario.</p>
          <div className="options">
            <h2 className="hacer__heading">¿Qué puedes hacer en VecinoConecta?</h2>
            <div className="actividades__grid">
              <div className="actividad">
                <img src={imageJunta} alt=""/>
                <h3 className="actividad__heading">Participa en reuniones y eventos</h3>
                <p>Participa en actividades y eventos comunitarios.</p>
              </div>
              <div className="actividad">
                <img src={imagesNoticias} alt=""/>
                <h3 className="actividad__heading">Entérate de noticias</h3>
                <p>Mantente al día con las últimas noticias.</p>
              </div>
              <div className="actividad">
                <img src={imagesChat} alt=""/>
                <h3 className="actividad__heading">Comunícate con tus vecinos</h3>
                <p>Fortalece los lazos con quienes comparten tu entorno. </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  

export default Dashboard;