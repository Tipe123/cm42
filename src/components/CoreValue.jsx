import React from 'react';
import Vlaue from './component/Vlaue';
import {values} from '../helpers/values';
const CoreValue = () => {
    return(
        <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center pt-1">Our core Values</h2>
            <hr />
            </div>
            <div className="row pt-4 justify-content-center">
           {values.map((value , key) => {
               key = {key};
               return <Vlaue name={value.name} descript={value.description} icon={value.icon}/>
           })}
           </div>
        </div>
    </section>
    );
};

export default CoreValue;
