const apiKey = 'eed4c8b8e55e4bf8ad4a3c7c448159d8';

export default {
  searchQuery: '',
  page: 1,
  fetchArticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.query}&language=ru&page=${this.page}`;

    const options = {
      headers: {
        Authorization: apiKey,
      },
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(({ articles }) => {
        this.page += 1;
        return articles;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
