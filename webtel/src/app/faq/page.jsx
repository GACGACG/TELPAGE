import "@/js/navbar.js";
import "@/css/faq.css";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";

function FAQPage() {
    return (
        <main className="main-flex">
            <Navbar></Navbar>
            <NavbarMobile></NavbarMobile>
            <section id="content">
                <h1>Preguntas Frecuentes</h1>
                <article className="faq-container">
                    <details>
                        <summary>¿Qué es Telemática?</summary>
                        <div className="answers-container">
                            <p>Telemática es una disciplina científica y tecnológica, que se originó por la necesidad de integrar las telecomunicaciones y la informática para crear sistemas que permitan la comunicación, transmisión y procesamiento de información a distancia.</p>
                            <p>Otra interpretación es "La integración de de las tecnologías de Información y Comunicaciones (TIC)"</p>
                        </div>
                    </details>
                    <details>
                        <summary>¿Qué son las TICS?</summary>
                        <div className="answers-container">
                            <p>Las TIC (Tecnologías de la Información y la Comunicación) son un conjunto de tecnologías que se utilizan para gestionar, procesar, transmitir y compartir información. Estas tecnologías han tenido un impacto significativo en la forma en que las personas se comunican y acceden a la información en la era moderna.</p>
                        </div>
                    </details>
                    <details>
                        <summary>¿En qué se diferencia Telemática de Electrónica mención Telecomunicaciones?</summary>
                        <div className="answers-container">
                            <p>La mención Telecomunicaciones entrega las técnicas para interconectar puntos para transmitir señales (a nivel físico). En cambio la Telemática entrega las herramientas necesarias para transmitir información.</p>
                        </div>
                    </details>
                    <details>
                        <summary>¿Qué labores realizan los Telemáticos?</summary>
                        <div className="answers-container">
                            <p>Los telemáticos son los ingenieros detrás del funcionamiento que une las telecomunicaciones e informática. Por ejemplo, diseñar redes que conectan todos tus dispositivos, hasta la integración en ciudades inteligentes o por otro lado desarrollar aplicaciones avanzadas, buscar garantizar la seguridad de tus datos en línea, investigar sobre nuevas prestaciones de la tecnología, entre otras opciones.</p>
                        </div>
                    </details>
                    <details>
                        <summary>¿En qué tipo de empresas puede trabajar un Ingeniero Civil Telemático?</summary>
                        <div className="answers-container">
                            <p>Debido a las múltiples áreas en que se puede desenvolver un telemático se podría trabajar en una variedad de empresas y sectores que requieren conocimientos en telecomunicaciones, informática y sistemas de información. Como lo pueden ser de las más cotizadas:</p>
                            <ul>
                                <li>Empresas de Telecomunicaciones</li>
                                <li>Empresas de Tecnología</li>
                                <li>Empresas Energéticas</li>
                                <li>Empresas de Construcción e Ingeniería</li>
                                <li>Industria y Manufactura</li>
                                <li>Sector de Salud</li>
                                <li>Transporte y Logística</li>
                                <li>Sector Público</li>
                                <li>Educación y Capacitación</li>
                                <li>Sistemas financieros</li>
                            </ul>
                        </div>
                    </details>
                    <details>
                        <summary>¿Cuál es el puntaje de corte?</summary>
                        <div className="answers-container">
                            <p>El puntaje de corte para el proceso de admisión 2023 fue de 620,7. El puntaje promedio de Lenguaje y Matemática fue de 485.</p>
                        </div>
                    </details>
                    <details>
                        <summary>¿Existen especializaciones en telemática?</summary>
                        <div className="answers-container">
                            <p>Si, existen múltiples especializaciones enfocadas en tópicos de la carrera, por lo general las más comunes son:</p>
                            <ul>
                                <li>Redes y Comunicaciones</li>
                                <li>Seguridad Informática y Ciberseguridad</li>
                                <li>Desarrollo de Software y Aplicaciones</li>
                                <li>Internet de las Cosas (<i>IoT</i>)</li>
                                <li>Telecomunicaciones Móviles</li>
                                <li>Gestión de Proyectos Tecnológicos</li>
                                <li>Analítica de Datos y Big Data</li>
                            </ul>
                        </div>
                    </details>
                </article>
            </section>
        </main>
    );
}

export default FAQPage;