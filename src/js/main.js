"use strict";
console.log(`Hello world!`);


const list = document.querySelector ('.list--js')

fetch('https://api.github.com/users/pawelkochowicz/repos?sort=updated&direction=desc')
.then(resp => resp.json())
  .then(resp => {
      const repos = resp;
      for (const repo of repos) {
          const {name, description, html_url, homepage} = repo;
          list.innerHTML += 
          `<li class="project">
          <img class="project__logo" src="../assets/img/Github Icon.svg" alt="#">
          <h4 class="project__title">${name}</h4>
          <p class="project__description">${description}</p>
          <footer class="project__footer">
            <a class="demo" href="${homepage}">Demo</a>
            <a class="github" href="${html_url}">Github</a>
          </footer>
          </li>`
      }
    })

      .catch(err => {
        console.log("Can't connect to github api.")
    })
    