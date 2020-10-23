import React, { useEffect, useState } from 'react';
import {Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './App.css';
import IndividualArticle from "./components/IndividualArticle";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import SavedList from "./components/SavedList";
import {  fetchArticles, rankArticle, saveArticle,} from "../src/store/actions";
import {SignUpPage} from './components/SignUpPage'
import LoginPage from './components/LoginPage'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:10,
    backgroundColor:'rgba(70, 150, 229,1)', 
    borderRadius:22,
    marginBottom:20

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor:'rgba(70, 150, 229,1)'
  },
}));

const App = (props) => {
  const classes = useStyles();

  const { fetchArticles, rankArticle, saveArticle } = props;
  const [savedList, setSavedList] = useState({});

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
      <div>
        <div className="App">
          <Route exact path = '/'>
            <LoginPage />
          </Route>
          <Route path = '/signup'>
            <SignUpPage />
          </Route>
        </div>
        <div>
          <Route exact path="/saved-articles/">
            <SavedList savedList={props.savedArticles}/>
          </Route>
          <Route exact path="/success">
            <div className={classes.root}>
              <AppBar position="static" className={classes.appBar}>
                <Toolbar >
                  <Typography variant="h6" className={classes.title}>
                      Pinterest
                  </Typography>
                    <Button color="inherit"> 
                      <Link className="link" exact path to="/">
                    Articles
                    </Link></Button>
                    <Button color="inherit">
                    <Link className="link" exact path to="/saved-articles/">
                    Saved Articles
                  </Link></Button>
                </Toolbar>
              </AppBar>
            </div>
            <ArticleList articles={props.articles} />
          </Route>
          <Route exact path="/articles/:id/">
            <IndividualArticle />
            <Article />
          </Route>
        </div>
      </div>
  );
};
const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    savedArticles: state.savedArticles,
  };
};
export default connect(mapStateToProps, {
  fetchArticles,
  rankArticle,
  saveArticle,
})(App);