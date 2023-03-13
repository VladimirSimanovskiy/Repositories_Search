import { sidebarToggle } from "./mobilenav.js";
import { getKeyWords } from "./modules/getKeyWords.js";
import { getRepositories } from "./modules/getRepositories.js";

sidebarToggle();

submit.addEventListener('click', (event) => {
  const submit = document.getElementById('submit');
  if (event.target != submit) return false;
  const kw = getKeyWords();
  getRepositories(kw);

})
