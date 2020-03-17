import React from "react";
import { ProjectPage } from "../Components/projectPage.js";
import { ProjectContent } from "../Components/ProjectContent.js";
import Image from "../Components/image.js";
import Video from "../Components/video.js";

export default function Lumos() {
  return (
    <div className="projectPage">
      <div className="projectPage-content-container">
        <h1 className="contentTitle">Lumos</h1>
        <div className="projectPage-intro">
          <ProjectPage
            miniTitle="Role"
            roleName="Hardware Engineer | UX Designer | Visual Designer | Interaction Designer | Researcher"
          />
          <ProjectPage
            miniTitle="Team"
            roleName="Elizabeth Anne | Edmond Hua | Ray Hwang | Jingxuan Cao | Angineh Karabedian | Miriam Green | Abhinav Bose | Oliver Frohlich "
          />
        </div>
        <ProjectContent
          contentTitle="Abstract"
          mainContent="Parks help cities, but only if people use them. Although parks promote a more active 
        and less stressful lifestyle, research has shown that city parks are ‘underused’ by the general population. 
        as people prefer to relax in places that are more accessible and conducive to social activity."
        />
        <ProjectContent
          contentTitle="Overview"
          mainContent="Lumos is a interactive lighting installation designed to draw in users with its big and bold 
        lights, and provide them with the ability to customise the colours. This unique interactive experience can 
        garner large crowds, promoting social activity. Thus, Lumos can transform parks into lively, safe and 
        well-used spaces."
        />
      </div>
    </div>
  );
}
