import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent/PageHeader";
import "./Projects.scss";
import ImageOne from "../../images/pizza_Img.png";
import ImageTwo from "../../images/worldwise_react.png";
import ImageThree from "../../images/usepopcorn_img.png";
import ImageFour from "../../images/to_do_list.png";
import ImageFive from "../../images/react_quiz.png";
import ImageSix from "../../images/split_bill.png";
import ImageSeven from "../../images/travel_list_app.png";
import ImageEight from "../../images/mapty.png";
import ImageNine from "../../images/bankist.png";
import ImageTen from "../../images/dice_game.png";
import ImageEleven from "../../images/guess_no.png";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "FastPizza App",
    image: ImageOne,
    link: "https://gurjeet-fast-pizza-react.netlify.app/",
  },
  {
    id: 2,
    name: "Worldwise App",
    link: "https://gurjeet-worlwise-location-tracker.netlify.app/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Movie Search App",
    image: ImageThree,
    link: "https://usepopcorn-movieapp.netlify.app/",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,

    link: "https://gurjeet-todo-list.netlify.app/",
  },
  {
    id: 2,
    name: "React Quiz App",
    image: ImageFive,
    link: "https://react-practice-quiz.netlify.app/",
  },
  {
    id: 2,
    name: "Split Bill App",
    image: ImageSix,
    link: "https://eat-n-splitbill-react.netlify.app/",
  },
  {
    id: 2,
    name: "Travel List App",
    image: ImageSeven,
    link: "https://gurjeet-travel-trip-list.netlify.app/",
  },
  {
    id: 3,
    name: "Exercise Tracker App",
    image: ImageEight,
    link: "mapty-project-exercise-tracker.netlify.app",
  },
  {
    id: 3,
    name: "Bankist App",
    image: ImageNine,
    link: "gurjeet-bankist-app.netlify.app",
  },
  {
    id: 3,
    name: "Dice Game App",
    image: ImageTen,
    link: "dice-game-guri.netlify.app",
  },
  {
    id: 3,
    name: "Guess My No App",
    image: ImageEleven,
    link: "guesss-number-app.netlify.app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "React Js",
  },
  {
    filterId: 3,
    label: "Javascript",
  },
];

function Projects() {
  const [filterValue, setFilterValue] = useState(1);

  const [hoverValue, setHoverValue] = useState(null);

  function handleFilter(currentId) {
    setFilterValue(currentId);
  }

  function handleHover(index) {
    setHoverValue(index);
  }

  const filterItems =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filterValue);

  console.log(filterItems);

  return (
    <section id="projects" className="projects">
      <PageHeader headerText="Projects" icon={<BsInfoCircleFill size={40} />} />

      <div className="projects__content">
        <ul className="projects__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filterValue ? "active" : ""}
              key={item.filterId}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="projects__content__cards">
          {filterItems.map((item, index) => (
            <div
              className="projects__content__cards__item"
              key={item.name}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="projects__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project-img" />
                </a>
              </div>

              <div className="overlay">
                {index === hoverValue && (
                  <div>
                    <p>{item.name}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
