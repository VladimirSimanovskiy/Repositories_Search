import { createSearchResult } from "./createSearchResult.js";

export async function getRepositories(params) {
  let url = new URL('https://api.github.com/search/repositories');
  url.searchParams.set('q', params);

  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/vnd.github+json',
      }
    })
    let data;
    let err;
  
    if (response.ok) {
      data = await response.json();
    } else {
      err = 'Ошибка HTML:' + response.status;
    }

    const search = document.getElementById('search')
    if (search.lastChild.className == 'search_result') {
      search.lastChild.remove();
    }

    createSearchResult(data);
  
  } catch (err) {
    alert(err.message);
  }
}
