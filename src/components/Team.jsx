import React from 'react';
import { TeamMembers } from '../helpers/TeamMembers';
import Teamlist from './component/Teamlist';
import '../styles/Team.css';
const Team = () => {
  return (
  <div className="team section-bg mt-5">
      <div className="Container">
          <div className="section-title">
              <h2 className="text-center py-3">
                  Our Team
              </h2>
          </div>
         {/* Here */}
         <div className="row justify-content-center">
         {TeamMembers.map((team,key) => {
             key={key};
                return <Teamlist name={team.name} position={team.position} image={team.image} facebook={team.facebook} instagram={team.instagram} twitter={team.twitter} linkedin={team.linkedin}/>
         })}
         </div>
         
      </div>
  </div>);
};

export default Team;
