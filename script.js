// THE DIVS HOUSING THE JOB LISTINGS
const listingOne = document.getElementById("listing-I");
const listingTwo = document.getElementById("listing-II");
const listingThree = document.getElementById("listing-III");
const listingFour = document.getElementById("listing-IV");
const listingFive = document.getElementById("listing-V");
const listingSix = document.getElementById("listing-VI");
const listingSeven = document.getElementById("listing-VII");
const listingEight = document.getElementById("listing-VIII");
const listingNine = document.getElementById("listing-IX");
const listingTen = document.getElementById("listing-X");

// THE CONTAINER HOUSING THE FILTERS
const filters = document.getElementById("filters");

// THE FILTERS
const frontendFilter = document.getElementById("frontend-filter");
const fullstackFilter = document.getElementById("fullstack-filter");
const backendFilter = document.getElementById("backend-filter");
const juniorFilter = document.getElementById("junior-filter");
const midweightFilter = document.getElementById("midweight-filter");
const seniorFilter = document.getElementById("senior-filter");
const pythonFilter = document.getElementById("python-filter");
const rubyFilter = document.getElementById("ruby-filter");
const javascriptFilter = document.getElementById("javascript-filter");
const htmlFilter = document.getElementById("html-filter");
const cssFilter = document.getElementById("css-filter");
const reactFilter = document.getElementById("react-filter");
const sassFilter = document.getElementById("sass-filter");
const vueFilter = document.getElementById("vue-filter");
const djangoFilter = document.getElementById("django-filter");
const rorFilter = document.getElementById("ror-filter");

// THE CLEAR BUTTON
const clear = document.getElementById("clear");

// THE CANCEL BUTTONS ON EACH FILTER
const frontendCancel = document.getElementById("frontend-cancel");
const fullstackCancel = document.getElementById("fullstack-cancel");
const backendCancel = document.getElementById("backend-cancel");
const juniorCancel = document.getElementById("junior-cancel");
const midweightCancel = document.getElementById("midweight-cancel");
const seniorCancel = document.getElementById("senior-cancel");
const pythonCancel = document.getElementById("python-cancel");
const rubyCancel = document.getElementById("ruby-cancel");
const javascriptCancel = document.getElementById("javascript-cancel");
const htmlCancel = document.getElementById("html-cancel");
const cssCancel = document.getElementById("css-cancel");
const reactCancel = document.getElementById("react-cancel");
const sassCancel = document.getElementById("sass-cancel");
const vueCancel = document.getElementById("vue-cancel");
const djangoCancel = document.getElementById("django-cancel");
const rorCancel = document.getElementById("ror-cancel");

function frontendTag() {
  listingTwo.classList.add("fullstack", "backend");
  listingFive.classList.add("fullstack", "backend");
  listingSix.classList.add("fullstack", "backend");
  listingNine.classList.add("fullstack", "backend");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("frontend-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function fullstackTag() {
  listingOne.classList.add("frontend", "backend");
  listingThree.classList.add("frontend", "backend");
  listingFour.classList.add("frontend", "backend");
  listingSix.classList.add("frontend", "backend");
  listingSeven.classList.add("frontend", "backend");
  listingEight.classList.add("frontend", "backend");
  listingTen.classList.add("frontend", "backend");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("fullstack-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function backendTag() {
  listingOne.classList.add("frontend", "fullstack");
  listingTwo.classList.add("frontend", "fullstack");
  listingThree.classList.add("frontend", "fullstack");
  listingFour.classList.add("frontend", "fullstack");
  listingFive.classList.add("frontend", "fullstack");
  listingSeven.classList.add("frontend", "fullstack");
  listingEight.classList.add("frontend", "fullstack");
  listingNine.classList.add("frontend", "fullstack");
  listingTen.classList.add("frontend", "fullstack");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("backend-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function juniorTag() {
  listingOne.classList.add("midweight", "senior");
  listingTwo.classList.add("midweight", "senior");
  listingFive.classList.add("midweight", "senior");
  listingNine.classList.add("midweight", "senior");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("junior-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function midweightTag() {
  listingOne.classList.add("junior", "senior");
  listingThree.classList.add("junior", "senior");
  listingFour.classList.add("junior", "senior");
  listingSix.classList.add("junior", "senior");
  listingSeven.classList.add("junior", "senior");
  listingEight.classList.add("junior", "senior");
  listingTen.classList.add("junior", "senior");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("midweight-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function seniorTag() {
  listingTwo.classList.add("junior", "midweight");
  listingThree.classList.add("junior", "midweight");
  listingFour.classList.add("junior", "midweight");
  listingFive.classList.add("junior", "midweight");
  listingSix.classList.add("junior", "midweight");
  listingSeven.classList.add("junior", "midweight");
  listingEight.classList.add("junior", "midweight");
  listingNine.classList.add("junior", "midweight");
  listingTen.classList.add("junior", "midweight");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("senior-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function pythonTag() {
  listingOne.classList.add("ruby", "javascript", "html", "css");
  listingThree.classList.add("ruby", "javascript", "html", "css");
  listingFour.classList.add("ruby", "javascript", "html", "css");
  listingFive.classList.add("ruby", "javascript", "html", "css");
  listingSix.classList.add("ruby", "javascript", "html", "css");
  listingSeven.classList.add("ruby", "javascript", "html", "css");
  listingEight.classList.add("ruby", "javascript", "html", "css");
  listingTen.classList.add("ruby", "javascript", "html", "css");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("python-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function rubyTag() {
  listingOne.classList.add("python", "javascript", "html", "css");
  listingTwo.classList.add("python", "javascript", "html", "css");
  listingThree.classList.add("python", "javascript", "html", "css");
  listingFour.classList.add("python", "javascript", "html", "css");
  listingSeven.classList.add("python", "javascript", "html", "css");
  listingEight.classList.add("python", "javascript", "html", "css");
  listingNine.classList.add("python", "javascript", "html", "css");
  listingTen.classList.add("python", "javascript", "html", "css");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("ruby-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function javascriptTag() {
  listingTwo.classList.add("ruby", "python", "html", "css");
  listingSix.classList.add("ruby", "python", "html", "css");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("javascript-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function htmlTag() {
  listingTwo.classList.add("ruby", "javascript", "python", "css");
  listingThree.classList.add("ruby", "javascript", "python", "css");
  listingFour.classList.add("ruby", "javascript", "python", "css");
  listingFive.classList.add("ruby", "javascript", "python", "css");
  listingSix.classList.add("ruby", "javascript", "python", "css");
  listingEight.classList.add("ruby", "javascript", "python", "css");
  listingNine.classList.add("ruby", "javascript", "python", "css");
  listingTen.classList.add("ruby", "javascript", "python", "css");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("html-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function cssTag() {
  listingTwo.classList.add("ruby", "javascript", "html", "python");
  listingThree.classList.add("ruby", "javascript", "html", "python");
  listingFive.classList.add("ruby", "javascript", "html", "python");
  listingSix.classList.add("ruby", "javascript", "html", "python");
  listingSeven.classList.add("ruby", "javascript", "html", "python");
  listingEight.classList.add("ruby", "javascript", "html", "python");
  listingNine.classList.add("ruby", "javascript", "html", "python");
  listingTen.classList.add("ruby", "javascript", "html", "python");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("css-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function reactTag() {
  listingOne.classList.add("sass", "vue", "django", "ror");
  listingFour.classList.add("sass", "vue", "django", "ror");
  listingFive.classList.add("sass", "vue", "django", "ror");
  listingSix.classList.add("sass", "vue", "django", "ror");
  listingSeven.classList.add("sass", "vue", "django", "ror");
  listingEight.classList.add("sass", "vue", "django", "ror");
  listingNine.classList.add("sass", "vue", "django", "ror");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("react-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function sassTag() {
  listingOne.classList.add("react", "vue", "django", "ror");
  listingTwo.classList.add("react", "vue", "django", "ror");
  listingFour.classList.add("react", "vue", "django", "ror");
  listingSix.classList.add("react", "vue", "django", "ror");
  listingNine.classList.add("react", "vue", "django", "ror");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("sass-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function vueTag() {
  listingOne.classList.add("react", "sass", "django", "ror");
  listingTwo.classList.add("react", "sass", "django", "ror");
  listingThree.classList.add("react", "sass", "django", "ror");
  listingFour.classList.add("react", "sass", "django", "ror");
  listingFive.classList.add("react", "sass", "django", "ror");
  listingSix.classList.add("react", "sass", "django", "ror");
  listingSeven.classList.add("react", "sass", "django", "ror");
  listingNine.classList.add("react", "sass", "django", "ror");
  listingTen.classList.add("react", "sass", "django", "ror");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("vue-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function djangoTag() {
  listingOne.classList.add("react", "sass", "vue", "ror");
  listingTwo.classList.add("react", "sass", "vue", "ror");
  listingThree.classList.add("react", "sass", "vue", "ror");
  listingFour.classList.add("react", "sass", "vue", "ror");
  listingFive.classList.add("react", "sass", "vue", "ror");
  listingSix.classList.add("react", "sass", "vue", "ror");
  listingSeven.classList.add("react", "sass", "vue", "ror");
  listingEight.classList.add("react", "sass", "vue", "ror");
  listingTen.classList.add("react", "sass", "vue", "ror");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("django-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

function rorTag() {
  listingOne.classList.add("react", "sass", "vue", "django");
  listingTwo.classList.add("react", "sass", "vue", "django");
  listingThree.classList.add("react", "sass", "vue", "django");
  listingFour.classList.add("react", "sass", "vue", "django");
  listingFive.classList.add("react", "sass", "vue", "django");
  listingSeven.classList.add("react", "sass", "vue", "django");
  listingEight.classList.add("react", "sass", "vue", "django");
  listingNine.classList.add("react", "sass", "vue", "django");
  listingTen.classList.add("react", "sass", "vue", "django");
  document.getElementById("filters").style.display = "flex";
  document.getElementById("ror-filter").style.display = "flex";
  document.getElementById("clear").style.display = "flex";
}

frontendCancel.addEventListener("click", function () {
  listingTwo.classList.remove("fullstack", "backend");
  listingFive.classList.remove("fullstack", "backend");
  listingSix.classList.remove("fullstack", "backend");
  listingNine.classList.remove("fullstack", "backend");
  document.getElementById("frontend-filter").style.display = "none";
});

fullstackCancel.addEventListener("click", function () {
  listingOne.classList.remove("frontend", "backend");
  listingThree.classList.remove("frontend", "backend");
  listingFour.classList.remove("frontend", "backend");
  listingSix.classList.remove("frontend", "backend");
  listingSeven.classList.remove("frontend", "backend");
  listingEight.classList.remove("frontend", "backend");
  listingTen.classList.remove("frontend", "backend");
  document.getElementById("fullstack-filter").style.display = "none";
});

backendCancel.addEventListener("click", function () {
  listingOne.classList.remove("frontend", "fullstack");
  listingTwo.classList.remove("frontend", "fullstack");
  listingThree.classList.remove("frontend", "fullstack");
  listingFour.classList.remove("frontend", "fullstack");
  listingFive.classList.remove("frontend", "fullstack");
  listingSeven.classList.remove("frontend", "fullstack");
  listingEight.classList.remove("frontend", "fullstack");
  listingNine.classList.remove("frontend", "fullstack");
  listingTen.classList.remove("frontend", "fullstack");
  document.getElementById("backend-filter").style.display = "none";
});

juniorCancel.addEventListener("click", function () {
  listingOne.classList.remove("midweight", "senior");
  listingTwo.classList.remove("midweight", "senior");
  listingFive.classList.remove("midweight", "senior");
  listingNine.classList.remove("midweight", "senior");
  document.getElementById("junior-filter").style.display = "none";
});

midweightCancel.addEventListener("click", function () {
  listingOne.classList.remove("junior", "senior");
  listingThree.classList.remove("junior", "senior");
  listingFour.classList.remove("junior", "senior");
  listingSix.classList.remove("junior", "senior");
  listingSeven.classList.remove("junior", "senior");
  listingEight.classList.remove("junior", "senior");
  listingTen.classList.remove("junior", "senior");
  document.getElementById("midweight-filter").style.display = "none";
});

seniorCancel.addEventListener("click", function () {
  listingTwo.classList.remove("junior", "midweight");
  listingThree.classList.remove("junior", "midweight");
  listingFour.classList.remove("junior", "midweight");
  listingFive.classList.remove("junior", "midweight");
  listingSix.classList.remove("junior", "midweight");
  listingSeven.classList.remove("junior", "midweight");
  listingEight.classList.remove("junior", "midweight");
  listingNine.classList.remove("junior", "midweight");
  listingTen.classList.remove("junior", "midweight");
  document.getElementById("senior-filter").style.display = "none";
});

pythonCancel.addEventListener("click", function () {
  listingOne.classList.remove("ruby", "javascript", "html", "css");
  listingThree.classList.remove("ruby", "javascript", "html", "css");
  listingFour.classLisremove("ruby", "javascript", "html", "css");
  listingFive.classList.remove("ruby", "javascript", "html", "css");
  listingSix.classList.remove("ruby", "javascript", "html", "css");
  listingSeven.classList.remove("ruby", "javascript", "html", "css");
  listingEight.classList.remove("ruby", "javascript", "html", "css");
  listingTen.classList.remove("ruby", "javascript", "html", "css");
  document.getElementById("python-filter").style.display = "none";
});

rubyCancel.addEventListener("click", function () {
  listingOne.classList.remove("python", "javascript", "html", "css");
  listingTwo.classList.remove("python", "javascript", "html", "css");
  listingThree.classList.remove("python", "javascript", "html", "css");
  listingFour.classList.remove("python", "javascript", "html", "css");
  listingSeven.classList.remove("python", "javascript", "html", "css");
  listingEight.classList.remove("python", "javascript", "html", "css");
  listingNine.classList.remove("python", "javascript", "html", "css");
  listingTen.classList.remove("python", "javascript", "html", "css");
  document.getElementById("ruby-filter").style.display = "none";
});

javascriptCancel.addEventListener("click", function () {
  listingTwo.classList.remove("ruby", "python", "html", "css");
  listingSix.classList.remove("ruby", "python", "html", "css");
  document.getElementById("javascript-filter").style.display = "none";
});

htmlCancel.addEventListener("click", function () {
  listingTwo.classList.remove("ruby", "javascript", "python", "css");
  listingThree.classList.remove("ruby", "javascript", "python", "css");
  listingFour.classList.remove("ruby", "javascript", "python", "css");
  listingFive.classList.remove("ruby", "javascript", "python", "css");
  listingSix.classList.remove("ruby", "javascript", "python", "css");
  listingEight.classList.remove("ruby", "javascript", "python", "css");
  listingNine.classList.remove("ruby", "javascript", "python", "css");
  listingTen.classList.remove("ruby", "javascript", "python", "css");
  document.getElementById("html-filter").style.display = "none";
});

cssCancel.addEventListener("click", function () {
  listingTwo.classList.remove("ruby", "javascript", "html", "python");
  listingThree.classList.remove("ruby", "javascript", "html", "python");
  listingFive.classList.remove("ruby", "javascript", "html", "python");
  listingSix.classList.remove("ruby", "javascript", "html", "python");
  listingSeven.classList.remove("ruby", "javascript", "html", "python");
  listingEight.classList.remove("ruby", "javascript", "html", "python");
  listingNine.classList.remove("ruby", "javascript", "html", "python");
  listingTen.classList.remove("ruby", "javascript", "html", "python");
  document.getElementById("css-filter").style.display = "none";
});

reactCancel.addEventListener("click", function () {
  listingOne.classList.remove("sass", "vue", "django", "ror");
  listingFour.classList.remove("sass", "vue", "django", "ror");
  listingFive.classList.remove("sass", "vue", "django", "ror");
  listingSix.classList.remove("sass", "vue", "django", "ror");
  listingSeven.classList.remove("sass", "vue", "django", "ror");
  listingEight.classList.remove("sass", "vue", "django", "ror");
  listingNine.classList.remove("sass", "vue", "django", "ror");
  document.getElementById("react-filter").style.display = "none";
});

sassCancel.addEventListener("click", function () {
  listingOne.classList.remove("react", "vue", "django", "ror");
  listingTwo.classList.remove("react", "vue", "django", "ror");
  listingFour.classList.remove("react", "vue", "django", "ror");
  listingSix.classList.remove("react", "vue", "django", "ror");
  listingNine.classList.remove("react", "vue", "django", "ror");
  document.getElementById("sass-filter").style.display = "none";
});

vueCancel.addEventListener("click", function () {
  listingOne.classList.remove("react", "sass", "django", "ror");
  listingTwo.classList.remove("react", "sass", "django", "ror");
  listingThree.classList.remove("react", "sass", "django", "ror");
  listingFour.classList.remove("react", "sass", "django", "ror");
  listingFive.classList.remove("react", "sass", "django", "ror");
  listingSix.classList.remove("react", "sass", "django", "ror");
  listingSeven.classList.remove("react", "sass", "django", "ror");
  listingNine.classList.remove("react", "sass", "django", "ror");
  listingTen.classList.remove("react", "sass", "django", "ror");
  document.getElementById("vue-filter").style.display = "none";
});

djangoCancel.addEventListener("click", function () {
  listingOne.classList.remove("react", "sass", "vue", "ror");
  listingTwo.classList.remove("react", "sass", "vue", "ror");
  listingThree.classList.remove("react", "sass", "vue", "ror");
  listingFour.classList.remove("react", "sass", "vue", "ror");
  listingFive.classList.remove("react", "sass", "vue", "ror");
  listingSix.classList.remove("react", "sass", "vue", "ror");
  listingSeven.classList.remove("react", "sass", "vue", "ror");
  listingEight.classList.remove("react", "sass", "vue", "ror");
  listingTen.classList.remove("react", "sass", "vue", "ror");
  document.getElementById("django-filter").style.display = "none";
});

rorCancel.addEventListener("click", function () {
  listingOne.classList.remove("react", "sass", "vue", "django");
  listingTwo.classList.remove("react", "sass", "vue", "django");
  listingThree.classList.remove("react", "sass", "vue", "django");
  listingFour.classList.remove("react", "sass", "vue", "django");
  listingFive.classList.remove("react", "sass", "vue", "django");
  listingSeven.classList.remove("react", "sass", "vue", "django");
  listingEight.classList.remove("react", "sass", "vue", "django");
  listingNine.classList.remove("react", "sass", "vue", "django");
  listingTen.classList.remove("react", "sass", "vue", "django");
  document.getElementById("ror-filter").style.display = "none";
});


clear.addEventListener("click", function () {
  document.getElementById("filters").style.display = "none";
  document.getElementById("frontend-filter").style.display = "none";
  document.getElementById("junior-filter").style.display = "none";
  document.getElementById("fullstack-filter").style.display = "none";
  document.getElementById("backend-filter").style.display = "none";
  document.getElementById("midweight-filter").style.display = "none";
  document.getElementById("senior-filter").style.display = "none";
  document.getElementById("python-filter").style.display = "none";
  document.getElementById("ruby-filter").style.display = "none";
  document.getElementById("javascript-filter").style.display = "none";
  document.getElementById("html-filter").style.display = "none";
  document.getElementById("css-filter").style.display = "none";
  document.getElementById("react-filter").style.display = "none";
  document.getElementById("sass-filter").style.display = "none";
  document.getElementById("vue-filter").style.display = "none";
  document.getElementById("django-filter").style.display = "none";
  document.getElementById("ror-filter").style.display = "none";
  listingOne.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingTwo.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingThree.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingFour.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingFive.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingSix.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingSeven.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingEight.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingNine.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
  listingTen.classList.remove("frontend", "fullstack", "backend", "junior", "midweight", "senior", "html", "css", "javascript", "python", "ruby", "ror", "react", "sass", "vue", "django");
});
