import articleTpl from '../templates/articles.hbs';
import refs from './refs.js';

function updateArticlesMarkup(articles) {
  const markup = articleTpl(articles);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateArticlesMarkup;
