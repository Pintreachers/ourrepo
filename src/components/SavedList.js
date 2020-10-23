import React from "react";
import { rankArticle, deleteArticle } from "../store/actions";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, rgba(236,200,246,0.60) 15%, rgba(70,110,229,0.45) 70%)',
    maxWidth: 345,
    minHeight:450,
    maxHeight: 450,
    marginBottom:20,
    padding:50,
    boxShadow: '0 3px 5px 4px rgba(103, 128, 159, 1)'
  },
  media: {
    height: 140,
  },
  action:{
    background: 'linear-gradient(45deg, rgba(219,218,222,0.15) 14%, rgba(103,128,159,0.15) 70%)',
    borderRadius: 12,
    padding:1
  }
});

const object =
    {
        "id": 0,
        "title": "",
        "author": "",
        "summary": "",
        "image": "https://picsum.photos/seed/picsum/200/300",
        "category": "",
        "rank": 4
};

function SavedList(props) {
  const classes = useStyles();
  const { rankArticle, deleteArticle, savedArticles } = props;

  const deleteCard = (id) =>  {
    deleteArticle(id);
    // console.log(saveArticle);
  };
  const rankUp = ( article ) => {
    //   console.log(tempHolder)
    rankArticle(article.id,article.rank+1)
  } 
  const rankDown = ( article ) => {
    //   console.log(tempHolder)
    rankArticle(article.id,article.rank-1)
  }


  return (
    <div className="articlecards">
      {savedArticles ? (
        savedArticles.map((article) => (
      <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <Typography gutterBottom variant="h4" component="h2">
        {article.title}
          </Typography>
        <CardMedia
          className={classes.media}
          image={article.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Author: {article.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {article.summary}
          </Typography> 
          <Typography variant="h6" color="textSecondary" component="p">
          Rank: {article.rank}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={() => rankUp(article)} >
        Rank +
        </Button> <Button size="small" color="primary"  onClick={() => rankDown(article)} >
        Rank -
        </Button><Button size="small" color="primary"  onClick={() => deleteCard(article.id)} >
        Delete
        </Button>
        </CardActions>
        </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    savedArticles: state.savedArticles,
  };
};

export default connect(mapStateToProps, {
  rankArticle,
  deleteArticle,
})(SavedList);
