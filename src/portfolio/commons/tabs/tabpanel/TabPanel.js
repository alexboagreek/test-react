import React from 'react';
import './tabPanel.scss'

export const TabPanel = ({tabs}) => {

  return (
    <>
      <div className={`tab_panel ${tabs[0].selected ? "visible" : ""}`}>
        <ul>

          <li>
            <span>Front-end  developer</span>
            <span> - Development</span>
            <p>React / Redux / Type Script</p>
          </li>
          <li>
            <span>User experience development</span>
            <span> - Development</span>
            <p>Delight the user and make it work.</p>
          </li>
          <li>
            <span>Interaction design</span>
            <span> - Development</span>
            <p>Use of different UI libraries</p>
          </li>
        </ul>
      </div>

      <div className={`tab_panel ${tabs[1].selected ? "visible" : ""}`}>
        <ul>
          <li className="personal_quality">
            <p className="personal_quality_item">Creation Web apps using ReactJs with
              TypeScript and various libraries</p>
            <p className="personal_quality_item">Using Redux and Redux-toolkit to manage application state</p>
            <p className="personal_quality_item">Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and And Design libraries</p>
            <p className="personal_quality_item">Implementation of multilingual application using localization management platform</p>
            <p className="personal_quality_item">Сheck the correctness of the code with Unit Tests and take Storybook for demonstration of individual
              modules of the application</p>
            <p className="personal_quality_item">Creation of applications with login and registration forms, as well as functionality with the ability to add, delete, change and filter data.</p>
          </li>
        </ul>
      </div>

      <div className={`tab_panel ${tabs[2].selected ? "visible" : ""}`}>
        <ul>
          <li>
            <span>Front-end developer</span>
            <span> - Learning app “Memorization Cards</span>
            <p>02/2022 - present</p>
          </li>
          <li>
            <span>Front-end  developer</span>
            <span> - Social project “Ta Na”</span>
            <p>08/2021 - 02/2022</p>
          </li>
        </ul>
      </div>

      <div className={`tab_panel ${tabs[3].selected ? "visible" : ""}`}>
        <ul>
          <li>
            <span>Front-end developer</span>
            <span> - IT-Incubator</span>
            <p>2021 - 2022</p>
          </li>
          <li>
            <span>HTML5 / CSS3</span>
            <span> - Brainscloud</span>
            <p>2021</p>
          </li>
          <li>
            <span>Back-end developer</span>
            <span> - JavaRush</span>
            <p>2019 - 2020</p>
          </li>
          <li>
            <span>Operation of the air transport</span>
            <span> - Military Academy, Belarus, Minsk</span>
            <p>2012 - 2017</p>
          </li>
        </ul>
      </div>
    </>
  );
};