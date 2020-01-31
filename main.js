import { showAll } from "./utils/showAll.js";
import { animeFilter, captionFilter, landscapeFilter } from "./utils/filters.js";

// Show All
document.querySelector('#title-logo').addEventListener('click', showAll);

// Filters
document.querySelector('#filter-anime').addEventListener('click', animeFilter);
document.querySelector('#filter-caption').addEventListener('click', captionFilter);
document.querySelector('#filter-landscape').addEventListener('click', landscapeFilter);





