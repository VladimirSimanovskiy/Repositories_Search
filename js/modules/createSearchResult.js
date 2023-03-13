export function createSearchResult(obj) {
  const search = document.getElementById('search');
  let searchResult = document.createElement('div');
  searchResult.className = 'search_result';

  const title = createSearchTitle(obj.total_count);
  const items = createSearchItem(obj.items);

  searchResult.append(title);
  searchResult.append(items);

  search.append(searchResult);
  
  


}


function createSearchItem(items) {
  let repoList = document.createElement('ul');
  repoList.className = 'repo_list';

  let counter = 0;
  for (let item of items) {

    let repoListItem = document.createElement('li');
    repoListItem.className = 'repo_list_item';

      let repoListItemContainer = document.createElement('div');
      repoListItemContainer.className = 'repo_item_container';

        let repoName = document.createElement('h3');
        repoName.className = 'repo_name';

          let repoNameLink = document.createElement('a');
          repoNameLink.target = '_blank';

        let repoDescription = document.createElement('p');
        repoDescription.className = 'repo_description';

        let languages = document.createElement('div');
        languages.className = 'languages';

    repoNameLink.textContent = item.name;
    repoNameLink.href = item.svn_url;
    repoDescription.textContent = item.description;

    if (Array.isArray(item.language)) {
      for (let language of item.language) {
        let itemLanguage = document.createElement('span');
        itemLanguage.className = 'item_language';
        itemLanguage.textContent = language;
        languages.append(itemLanguage)
    }
    } else {
      let itemLanguage = document.createElement('span');
      itemLanguage.className = 'item_language';
      itemLanguage.textContent = item.language;
      languages.append(itemLanguage);
    }

    let repoDate = document.createElement('p');
    repoDate.className = 'repo_date';
    let date = new Date(item.updated_at);
    let day = (date.getDate() < 10) ? '0' + String(date.getDate()) : date.getDate();
    let month = (date.getMonth() < 10) ? '0' + String(date.getMonth()) : date.getMonth();

    repoDate.textContent = `Дата последнего обновления: ${day}.${month}.${date.getFullYear()}`

        

    repoName.append(repoNameLink)
    repoListItemContainer.append(repoName);
    repoListItemContainer.append(repoDescription);
    repoListItemContainer.append(languages);
    repoListItemContainer.append(repoDate);
    repoListItem.append(repoListItemContainer);
    repoList.append(repoListItem);

    counter += 1;
    if (counter >= 10) break;
  }

  return repoList;
};

function createSearchTitle(totalCount) {
  let repoTitle = document.createElement('h1');
  repoTitle.className = 'repo_title';

  if (totalCount == 0) {
    repoTitle.textContent = 'Ничего не найдено';
  } else {
    repoTitle.textContent = `Найдено репозиториев: ${totalCount}`;
  }

  return repoTitle;
}