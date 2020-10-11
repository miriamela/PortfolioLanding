"use strict";
let projects = [
  {
    id: 1,
    name: "Looking for series?",
    subTitle: "Search engine for TV series",
    image: "./img/TVseries.png",
    linkSite: "https://miriamela.github.io/Search-Engine-for-TV-Series/",
    linkGit: "https://github.com/miriamela/Search-Engine-for-TV-Series",
  },
  {
    id: 2,
    name: "Awesome Profile-Card",
    subTitle: "Online business cards generator",
    image: "./img/ProfileCards.png",
    linkSite: "https://miriamela.github.io/Awesome-Profile-Cards/",
    linkGit: "https://github.com/miriamela/Awesome-Profile-Cards",
  },
  {
    id: 3,
    name: "Kappa contact page",
    subTitle: "Responsive contact page",
    image: "./img/Kappa.png",
    linkSite: "https://miriamela.github.io/Project-Kappa/",
    linkGit: "https://github.com/miriamela/Project-Kappa",
  },
  {
    id: 4,
    name: "Rick and Morty",
    subTitle: "Rick and Morty' characters search engine",
    image: "./img/Rick&Morty.png",
    linkSite: "https://miriamela.github.io/Rick-and-Morty/#/",
    linkGit: "https://github.com/miriamela/Rick-and-Morty",
  },
];

console.log(projects[2].img);
let main = document.querySelector(".main");

for (let i = 0; i < projects.length; i++) {
  main.innerHTML += ` 
<section id=${projects[i].id} class="section ${
    projects[i].id % 2 === 0 ? "section1" : "section2"
  }">
  <div class="lineFront line1"></div>
  <div class="title">
    <div class="links">
        <a target="_blank"
        href=${projects[i].linkSite}
        >${projects[i].name}</a>
        <a target="_blank"
        href=${projects[i].linkGit}>
            <i class="fab fa-github-alt"></i>
        </a>
        <p>${projects[i].subTitle}</p>
    </div>
  </div>
  <div class="lineBack line1"></div>
  <div class="image ${projects[i].id % 2 === 0 ? "image1" : "image2"} "> 
  <img class="picture" src="${projects[i].image}" alt="picture"/>
  </div>
</section>`;
  addListenerTitles();
}
function addListenerTitles() {
  const titles = document.querySelectorAll(".links");
  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("mouseenter", showPic);
  }
}

function showPic(event) {
  const singleTitle = event.currentTarget.parentElement.parentElement;
  const image = singleTitle.querySelector(".image");
  image.style.opacity = 0.8;
  setTimeout(() => {
    image.style.opacity = 0;
  }, 1800);
}
