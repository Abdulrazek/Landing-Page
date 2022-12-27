/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
// given ui in the header section
const navList = document.querySelector("#navbar__list");

// define sections in the given html file
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const navListCreation = () => {
  let uiChildren = ""; //children of given ui in the header

  //dynamically generating list items of given ui in the header
  sections.forEach((sec) => {
    uiChildren += `<li><a class="menu__link" href="#${sec.id}" data-nav="${sec.id}">${sec.dataset.nav}</a></li>;`;
  });

  //append all dynamically created elements above to the navList
  navList.innerHTML = uiChildren;
};
navListCreation();

// Add class 'active' to section when near top of viewport

function addActiveClassWhenSectionInViewport() {
  sections.forEach((section) => {
    // get position of section's top
    const sectionTopPosition = section.getBoundingClientRect().top;
    // set boundaries to active section
    let boundary = sectionTopPosition <= 150 && sectionTopPosition >= -150;
    // then remove active class from each section
    section.classList.remove("your-active-class");
    // add active class if the section inside the given boundary above
    //Remove highlight from active class
    section.classList.remove("highlight");

    if (boundary) {
      section.classList.add("your-active-class");
      //add highlight to active class
      section.classList.add("highlight");
      //Toggle highlight to active link when scrolling to relating active class
      document
        .querySelector(".highlightNavItem")
        ?.classList.remove("highlightNavItem");
      document
        .querySelector(`[href='#${section.id}']`)
        .classList.add("highlightNavItem");
    }
  });
}

//Calling addActiveClassWhenSectionInViewport function when scrolling
window.addEventListener("scroll", addActiveClassWhenSectionInViewport);

//smoothing go to each section(using delegation concept of event object)by using scrollIntoView Function.
navList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.dataset.nav) {
    const listItemId = document.getElementById(`${e.target.dataset.nav}`);
    listItemId.scrollIntoView({ behavior: "smooth" });
  }
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
