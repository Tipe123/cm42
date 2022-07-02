import React from 'react';
import '../styles/Services.css';
import Service from './component/Service';
import {ServiceList as servicelist} from '../helpers/ServiceList';
function Services (){
    return(
        <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Services</h2>
            <hr />
            </div>
            <div className="row pt-4 justify-content-center">
           {servicelist.map((service , key) => {
               key = {key};
               return <Service name={service.name} descript={service.descript} icon={service.icon}/>
           })}
           </div>
        </div>
    </section>
    );
}

export default Services;