import axios from "axios";
import { axiosWithAuth } from ".../components/utils/axiosWithAuth";
export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
export const RANK_ARTICLE = "RANK_ARTICLE";
export const SAVE_ARTICLE = "SAVE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const fetchArticles = (url) => (dispatch) => {
  axios.get(url).then((res) => {
    dispatch({ type: FETCH_ARTICLES_START, payload: res.data });
  });
};

export const rankArticle = (id) => (dispatch) => {
  axiosWithAuth
    .put(`/articles/${id}`)
    .then((res) => {
      dispatch({ type: RANK_ARTICLE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteArticle = (id) => (dispatch) => {
  axiosWithAuth
    .delete(`/saved_articles/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_ARTICLES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const saveArticle = (id) => (dispatch) => {
  axios.get(`/articles/${id}`).then((res) => {
    dispatch({ type: FETCH_ARTICLES_START, payload: res.data });
  });
  dispatch({ type: SAVE_ARTICLE, payload: res.data });
};
