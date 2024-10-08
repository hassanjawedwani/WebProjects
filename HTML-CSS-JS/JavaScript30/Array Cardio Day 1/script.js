const inventors = [
  { first: "Albert", second: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", second: "Newton", year: 1643, passed: 1727 },
  { first: "Marie", second: "Curie", year: 1867, passed: 1934 },
  { first: "Nikola", second: "Tesla", year: 1856, passed: 1943 },
  { first: "Thomas", second: "Edison", year: 1847, passed: 1931 },
  { first: "Galileo", second: "Galilei", year: 1564, passed: 1642 },
  { first: "Leonardo", second: "da Vinci", year: 1452, passed: 1519 },
  { first: "Alexander", second: "Graham Bell", year: 1847, passed: 1922 },
  { first: "Steve", second: "Jobs", year: 1955, passed: 2011 },
  { first: "James", second: "Watt", year: 1736, passed: 1819 }
];



// ? Give us array of inventors born in 1500s
// * filter array


// const fiftyInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// const fiftyInventors = inventors.filter(function (inventor) {
//   if (inventor.year >= 1500 && inventor.year <= 1599) {
//     return true;
//   }
// })
// console.table(fiftyInventors);


// ? Give us an array of inventory first & last names
// * map array

// const firstLastNames = inventors.map(inventor => inventor.first + " " + inventor.second);

// const firstLastNames = inventors.map(inventor => `${inventor.first} ${inventor.second}`);

// answer as object
// const firstLastNames = inventors.map(inventor => {
//   return {first: inventor.first, second: inventor.second}
// });

// console.log(firstLastNames);


// ? Give inventor list by old first

// const sortedInventors = inventors.sort(function(first, second) {
//   if (first.year - second.year > 0) {
//     return false;
//   } else if (first.year - second.year < 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const sortedInventors = inventors.sort((a, b) => a.year < b.year ? 1 : -1);

// console.table(sortedInventors);


// ? How many years inventor lived
// const totalLived = inventors.reduce((sum, inventor) => {
//   sum += inventor.passed - inventor.year;
//   return sum;
// }, 0)

// const totalLived = inventors.reduce((sum, inventor) => (sum + (inventor.passed - inventor.year)), 0);

// console.log(totalLived);


// ? Inventor by Years lived
// const inventorsModified = inventors.map(inventor => {
//   return { ...inventor, lived: inventor.passed - inventor.year };
// })

// const sortedByLived = inventorsModified.sort((x, y) => x.lived < y.lived ? 1 : -1);

// console.table(sortedByLived)

// ? list of boulevards in paris that contain 'de' anywhere in the name
// const links = Array.from(document.querySelectorAll(".mw-category a"));
// const names = links.map(link => link.textContent).filter(name => name.includes('de'));
// console.log(names);


const people = ["Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beecher, Henry",
  "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Bellow, Saul",
  "Benchley, Robert", "Benenson, Peter", "Benjamin, Walter", "Benn, Tony", "Bennett, Alan",
  "Benson, Leana", "Bent, Silas", "Bentesen, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano",
  "Berle, Milton", "Berlin, Irving", "Berne, Eric", "Bernhard, Sandra", "Berra, Yogi", "Berry, Halle",
  "Berry, Wendell", "Bethea, Erin", "Bevan, Aneurin", "Bevel, Ken", "Biden, Joseph", "Bierce, Ambrose",
  "Biko, Steve", "Billings, Josh", "Bingham, Mark", "Biondo, Frank", "Birrell, Augustine",
  "Black, Elk", "Blair, Robert", "Blair, Tony", "Blais, Marie-Claire", "Blake, Eubie", "Blake, James",
  "Blake, William"
];

// ? sort people by alphabetically by last name
const sorted = people.sort((a, b) => {

})

// console.table(sorted)