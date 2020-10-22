
import React,{ useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import IndividualArticle from "./components/IndividualArticle";
import ArticleList from "./components/ArticleList";
import {SignUpPage} from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import Article from "./components/Article";
import SavedList from "./components/SavedList";
import {  fetchArticles,  rankArticle,  saveArticle,} from "../src/store/actions";




import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
     <Router>
      <div className="App">
      <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar >
        <Typography variant="h6" className={classes.title}>
            Pinterest
          </Typography>
          <Button color="inherit"> <Link className="link" exact path to="/">
          Articles
         </Link></Button>
          <Button color="inherit">
          <Link className="link" exact path to="/saved-articles/">
          Saved Articles
        </Link></Button>
         </Toolbar>
      </AppBar>
    </div>
        <Route exact path="/saved-articles/">
          <SavedList savedList={props.savedArticles}/>
        </Route>
        <Route exact path="/">
          <ArticleList articles={props.articles} />
        </Route>
        <Route exact path="/articles/:id/">
          <IndividualArticle />
          <Article />
        </Route>
      </div>
    </Router>
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
