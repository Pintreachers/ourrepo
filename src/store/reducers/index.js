import { FETCH_ARTICLES_START } from "../actions";
import { FETCH_ARTICLES_FAILURE } from "../actions";
import { EDIT_ARTICLES } from "../actions";
import { SAVE_ARTICLE } from "../actions";
import { DELETE_ARTICLE } from "../actions";

const initialState = {
  articles: [{ 
    id: 0,
    title: "",
    author: "",
    summary: "",
    image: "https://picsum.photos/seed/picsum/200/300",
    category: "",
    rank: 0
  }], // Holds all articles in no order
  isLoading: false,
  error: "",
  savedArticles: [{ 
      id: 0,
      title: "",
      author: "",
      summary: "",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "",
      rank: 0
    }], //Holds users saved articles
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      //Gets all the articles and saves them to Article state
      return {
        ...state,
        isLoading: true,
        articles: [...articles, action.payload],
      };

    case RANK_ARTICLE:
      //Edits the article's rank and saves it to state of all articles and if any
      // are in the saved list it will update them there too
      return {
        ...state,
        isLoading: true,
        savedArticles: [...savedArticles, savedArticles.rank:action.payload],
      };

    case DELETE_ARTICLE:
      //Deletes the article and removes from state of all articles and if any
      //are in the saved list it remove them there too
      return {
        ...state,
        isLoading: true,
        articles: [...articles, action.payload],
        //if its inside saved we need to update and return new savedartciles list
      };
    case SAVE_ARTICLE:
      //Updates the state of saved articles in the server and on the local state
      //of user
      return {
        ...state,
        isLoading: true,
        savedArticles: [...savedArticles, action.payload],
      };

    default:
      return state;
  }
};
