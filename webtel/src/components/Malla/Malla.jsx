"use client";
import React, { useEffect } from 'react';
import '../../css/darkMode.css';
import '../../css/styles.css';
// import $ from 'jquery';
import d3 from 'd3';
import init from '../../js/init.js';
import malla from '../../js/malla';
import ramo from '../../js/ramo.js';


const MallaInteractiva = () => {

    useEffect(() => {
        d3.select(window).on('load', () => {
            ramo();
            malla();
            init();
        });
    }, []);
    return (
        <H1></H1>
        // <div id="content" className="blur d-flex flex-column flex-grow-1">
        //     {/* Main */}
        //     <section className="container-fluid">
        //         <div className="row justify-content-center no-gutters">
        //             <div className="col">
        //                 <div className="canvas pt-3 text-center" style={{ overflowX: 'auto' }}></div>
        //             </div>
        //         </div>
        //     </section>
        //     {/* ... el resto de la estructura ... */}
        // </div>
    );
};

export default withClientApp(MallaInteractiva);

