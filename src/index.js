import './sass/styles.scss';
import newsService from './js/news-service.js';
import updateArticlesMarkup from './js/update-articles-markup.js';
import refs from './js/refs.js';
import { data } from 'autoprefixer';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';
  form.reset();

  newsService.resetPage();
  newsService.fetchArticles().then(articles => {
    updateArticlesMarkup(articles);
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  newsService.fetchArticles().then(articles => {
    updateArticlesMarkup(articles);
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
});
