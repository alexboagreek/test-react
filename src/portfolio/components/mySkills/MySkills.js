import React from 'react';
import './mySkills.scss'
import {Title} from "../../commons/title/Title";

import react from './../../assets/mySkills/logos_react.png'
import redux from './../../assets/mySkills/logos_redux.png'
import ts from './../../assets/mySkills/logos_typescript.png'
import js from './../../assets/mySkills/logos_javascript.png'

import antDesign from './../../assets/mySkills/other/ant-design.png'
import bootstrap from './../../assets/mySkills/other/bootstrap.png'
import css3 from './../../assets/mySkills/other/css.png'
import html5 from './../../assets/mySkills/other/html.png'
import mui from './../../assets/mySkills/other/material-ui.png'
import axios from './../../assets/mySkills/other/axios.png'
import flux from './../../assets/mySkills/other/flux.png'
import git from './../../assets/mySkills/other/git.png'
import hook from './../../assets/mySkills/other/hook.png'
import java from './../../assets/mySkills/other/java.png'
import npm from './../../assets/mySkills/other/npm.png'
import rest from './../../assets/mySkills/other/rest.png'
import scss from './../../assets/mySkills/other/scss.png'
import tdd from './../../assets/mySkills/other/tdd.png'
import photoshop from './../../assets/mySkills/other/photoshop.png'
import thunk from './../../assets/mySkills/other/thunk.png'
import unit from './../../assets/mySkills/other/unit.png'
import yarn from './../../assets/mySkills/other/yarn.png'


import {Skill} from "./skill/Skill";
import {OtherSkill} from "./otherSkill/OtherSkill";

export const MySkills = () => {
  const initialSkills = [ react, redux, js, ts, ]
  const initialOtherSkills = [
    { url: antDesign, title: "Ant Design" },
    { url: bootstrap, title: "Bootstrap" },
    { url: css3, title: "CSS" },
    { url: html5, title: "HTML" },
    { url: mui, title: "Material UI" },
    { url: axios, title: "Axios" },
    { url: flux, title: "FLUX" },
    { url: git, title: "GIT" },
    { url: hook, title: "Hooks" },
    { url: java, title: "Java" },
    { url: npm, title: "npm" },
    { url: rest, title: "REST" },
    { url: scss, title: "SCSS" },
    { url: tdd, title: "TDD" },
    { url: photoshop, title: "Photoshop" },
    { url: thunk, title: "Redux-thunk" },
    { url: unit, title: "Unit tests" },
    { url: yarn, title:  "yarn" },
  ]

  return (
    <div id="skills" className="my_skills">
      <div className="container">
        <div className="row">
          <Title title={"My professional skills"}/>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="my_skills_section">
              {
                initialSkills.map((s,i) => <Skill urlImg={s} key={`${i}-${s}`}/> )
              }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="my_skills_other_section">
              {
                initialOtherSkills.map((s,i) => <OtherSkill urlImg={s.url}  otherSkillTitle={s.title} key={`${i}-${s}`}/> )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};