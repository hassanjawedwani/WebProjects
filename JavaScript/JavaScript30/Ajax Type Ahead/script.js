const citiesApiUrl =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(citiesApiUrl)
  .then((response) => response.json())
  .then((result) => {
    cities.push(...result);
  });

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(numStr) {
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayData() {
  const matchedCitites = findMatches(this.value, cities);
  const htmlString = matchedCitites.map(place => {
    const regex = new RegExp(this.value, "gi");
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
   
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join("")
 
  suggestions.innerHTML = htmlString;
}

const input = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
input.addEventListener("keyup", displayData);