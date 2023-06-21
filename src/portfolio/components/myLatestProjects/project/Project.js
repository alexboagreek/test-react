import React from 'react';
import './project.scss';
import {Button} from "../../../commons/button/Button";

export const Project = (
  {
    title,
    technologies,
    urlImage,
    urlGitPage,
    urlGitRepo,
  }
) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="project">
        <div className="thumbnail-inner">
          <div className="thumbnail"
               style={{ backgroundImage: `url(${urlImage})` }}> </div>
          <div className="bg-blr-image image"> </div>
        </div>
        <div className="content">
          <div className="inner">
            <p>{technologies}</p>
            <h4>
              <a href={urlGitPage} target="_blank">{title}</a>
            </h4>
            <Button btnName={"View details"} btnClass={"project_btn"} url={urlGitRepo}/>
          </div>
        </div>
      </div>
    </div>
  );
}