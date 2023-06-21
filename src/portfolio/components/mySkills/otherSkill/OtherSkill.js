import React from 'react';
import './otherSkill.scss'

export const OtherSkill = (
  {
    urlImg,
    otherSkillTitle
  }
) => {
  return (
    <li className="other_skill" >
        <img className="other_skill_img" src={urlImg} alt=""/>
        <h4>{otherSkillTitle}</h4>
    </li>
  );
};