import React from 'react';
import './myLatestProjects.scss';
import {Project} from "./project/Project";
import {Title} from "../../commons/title/Title";
import {Button} from "../../commons/button/Button";

export const MyLatestProjects = () => {
  const initialProjects = [
    {
      title: "Your Meal",
      urlImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      technologies: "React/Redux/JavaScript/Ant Design",
      urlGitPage: "https://your-meal-react.vercel.app/",
      urlGitRepo: "https://github.com/alexboagreek/your_meal_react",
    },
    {
      title: "Blogget",
      urlImage: "https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_2560%2Cc_limit/reddit-alien-red-st.jpg",
      technologies: "React/Redux-toolkit/JavaScript/Hooks/MUI",
      urlGitPage: "https://blogget-build.vercel.app/",
      urlGitRepo: "https://github.com/alexboagreek/blogget",
    },
    {
      title: "Portfolio",
      urlImage: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      technologies: "React/JavaScript/SCSS",
      urlGitPage: "#",
      urlGitRepo: "#",
    },
    {
      title: "Music App",
      urlImage: "https://www.sketchappsources.com/resources/source-image/music-app-dsamivai.png",
      technologies: "HTML/CSS/JavaScript",
      urlGitPage: "https://github.com/alexboagreek/music",
      urlGitRepo: "https://github.com/alexboagreek/music",
    },
    {
      title: "The Witcher",
      urlImage: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQVEvxt_DCAAap_OLq6_6mKLItc6ptoVNE50ymq5hbu9nK69nhu8m6TluuvYsnkroQyJ6AMi09BCNxGzSIMoKVzoKgBSuKZ__gPYY5CEg5ZBrABzaya5_nwLE0-C6z5kMbKgirB2ROmXxpRyY2Zw8PuLI.jpg?r=3cf",
      technologies: "HTML/CSS/JavaScript",
      urlGitPage: "https://alexboagreek-the-witcher.netlify.app/",
      urlGitRepo: "https://github.com/alexboagreek/witcher",
    },
    {
      title: "Burgers",
      urlImage: "https://www.photo.gallery/content/1.index/x3-photo-gallery-website.jpg",
      technologies: "Angular/TypeScript",
      urlGitPage: "https://alexboagreek.github.io/burgers/",
      urlGitRepo: "https://github.com/alexboagreek/burgers",
    },
  ]

  return (
    <div id="projects" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Title title={"My Best Project"}
               subtitle={"Projects that I have done"}/>
          </div>
        </div>
        <div className="row">
          {
            initialProjects.map((p, i) => <Project title={p.title}
                                                   urlImage={p.urlImage}
                                                   technologies={p.technologies}
                                                   urlGitPage={p.urlGitPage}
                                                   urlGitRepo={p.urlGitRepo}
                                                   key={`${i}-${p.title}`}
            />)
          }
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Button btnName={"View more"} btnClass={"view-more-btn"} url={"https://github.com/alexboagreek"}/>
          </div>
        </div>
      </div>
    </div>
  );
};