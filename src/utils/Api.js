import axios from "axios";

const myApi = axios.create({
  baseURL: "https://bys-news.herokuapp.com/api",
});

export const fetchUserByName = (username) => {
  return myApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const fetchUsers = () => {
  return myApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const createUser = (user) => {
  return myApi.post(`/users`, user).then((res) => {
    return res.data.user;
  });
};

export const fetchArticles = (query = "") => {
  return myApi.get(`/articles${query}`).then((res) => {
    return res.data.articles;
  });
};

export const fetchSingleArticle = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticle = (article_id) => {
  return myApi.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

export const fetchComments = (article_id) => {
  return myApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => res.data.comments);
};

export const postComment = (article_id, comment) => {
  return myApi.post(`/articles/${article_id}/comments`, comment);
};

export const fetchTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};
