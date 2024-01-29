"use client";

import Link from "next/link";
import Map from "@/components/Map";
import { Carousel } from "@/components/Carousel/Carousel";
import carouselDataSJ from "@/data/carouselDataSJ.json";
import carouselDataCC from "@/data/carouselDataCC.json";

import "@/css/landing.css";

const slidesSJ = carouselDataSJ.slides;
const slidesCC = carouselDataCC.slides;

function LandingPage() {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Link href="/">
              <img src="tel_1.png" alt="Logo" className="logo" />
            </Link>
          </div>
          <h1 className="logo-text">Ingeniería Civil Telemática</h1>
          <button className="ingresa-btn">
            <Link href="/login">Ingresa aquí</Link>
          </button>
        </div>
      </header><section id="inicio" className="section">
        <h2>¿Qué es Telemática?</h2>
        <p>La telemática es una disciplina científica y tecnológica que facilita la transmisión de información a distancia mediante la integración de recursos de telecomunicaciones y sistemas avanzados. Este campo se apoya en tecnologías como inteligencia artificial para optimizar el procesamiento de datos, soluciones de seguridad para asegurar la integridad y confidencialidad de la información. Un ejemplo de aplicación de todas estas áreas se ve con el Internet de las cosas (IoT), permitiendo la interconexión y comunicación eficiente entre múltiples dispositivos.</p>
      </section>
      <section id="quienes-somos" className="section">
        <h2>Quiénes Somos</h2>
        <p>Mamanigang Based Group</p>
      </section>
      <section id="sedes" className="section">
        <h2>Sedes</h2>
        <div className="sedes-container">
          <div className="sedes-item sedes-item-1">
            < Carousel data={slidesSJ} />
            <div className="sedes-text-1">
              <h2>Campus San Joaquín</h2>
              <p>Este campus ubicado en la Región Metropolitana tuvo la integración de la carrera <b>Ingeniería Civil Telemática</b> hace relativamente poco, en  el año 2019, sin embargo, desde el inicio se formó una comunidad sólida y unida, tanto de alumnos como de funcionarios.</p>
              <p>Actualmente, las salas y oficinas de la carrera se encuentran en el edificio más reciente de la universidad, junto a laboratorios de redes, electrónica digital y otros con fines de investigación.</p>
            </div>
          </div>
          <div className="sedes-item sedes-item-2">
            <div className="sedes-text-2">
              <h2>Campus Casa Central</h2>
              <p>En este campus, ubicado en la V Región, <b>Ingeniería Civil Telemática</b> existe desde más de una década. En 2001 fue aprobada por el Consejo Académico de la UTFSM y un año después, por el Consejo Superior, impartiendo la carrera por primera vez el año 2003, siendo pionera en el área TIC en Chile.</p>
            </div>
            < Carousel data={slidesCC} />
          </div>
        </div>
      </section>
      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p>Información de contacto y formulario de contacto.</p>
        <div className="grid">
          <Map coordinates={[-33.49052473688763, -70.61903028365923]} campus={"SJ"} address={"Avenida Vicuña Mackenna 3939, San Joaquín, Santiago"} campusName={"San Joaquín"} />
          <Map coordinates={[-33.03521377134143, -71.59677606337]} campus={"CC"} address={"Av. España 1680, Valparaíso"} campusName={"Casa Central"} />
        </div>
      </section>
      <footer className="footer">
        <p>&copy; Telemática 2024. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;