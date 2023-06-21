import React from 'react';
import './skill.scss'

export const Skill = (
  {
    urlImg
  }
) => {
  return (
    <li className="skill" >
        <img className="skill_img" src={urlImg} alt=""/>
    </li>

  );
};