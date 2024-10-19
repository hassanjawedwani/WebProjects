const authors = document.getElementById("authors");
const moreBtn = document.getElementById("load-btn");

// author: "Quincy Larson"
//
// bio: "The teacher who founded freeCodeCamp.org."
//
// image: "https://www.freecodecamp.org/news/content/images/size/w150/2021/03/Quincy-Larson-photo.jpg"
//
// url: "https://www.freecodecamp.org/news/author/quincylarson/"

let start = 0;
let end = 8;
let authorsArr = [];

fetch(
  "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"
).then((res) =>
  res.json().then((res) => {
    authorsArr = res.slice();
    displayAuthors(start, end);
  })
);

function displayAuthors(start, end) {
  while (start < end && start < authorsArr.length) {
    const author = authorsArr[start];
    const HTMLStr = `
      <div class="author">
        <h2>${author.author}</h2>
        <img src=${author.image} alt="author image"/>
        <div class="divider"></div>
        <p class="bio">${author.bio}</p>
        <p><a href=${author.url}>${author.author} author page</a></p>
      </div>
    `;
    authors.innerHTML += HTMLStr;
    start++;
  }
}

moreBtn.addEventListener("click", () => {
  if (start >= authorsArr.length) {
    alert("no more authors");
  }
  start += 8;
  end += 8;
  displayAuthors(start, end);
});
