import React from "react";
import { connect } from "react-redux";
import { saveArticle } from '../store/actions/index';
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
    background: 'linear-gradient(45deg, rgba(236,233,246,0.7035189075630253) 15%, rgba(70,150,229,0.45) 90%)',
    maxWidth: 345,
    minHeight:450,
    maxHeight: 450,
    marginBottom:20,
    padding:50,
    boxShadow: '0 3px 5px 4px rgba(103, 128, 159, 1)',

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


const ArticleCard = (props) => {
  const classes = useStyles();

  const {
    title,
    author,
    image,
    summary,
    category,
    rank,
    id,
  } = props.article;
//   console.log(props);

  const newCard = {
    title: title,
    author: author,
    image: image,
    summary: summary,
    category: category,
    rank: rank,
    id: id,
  };
  const onClick = () => {
    props.saveArticle(newCard.id);
    // console.log(saveArticle);
  };

  return (
    <div className="artcards">
    <Card className={classes.root}>
    <CardActionArea className={classes.action}>
   <Typography gutterBottom variant="h4" component="h2">
   {title}
     </Typography>
   <CardMedia
     className={classes.media}
     image={image}
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="h2">
     Author: {author}
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
     {summary}
     </Typography> 
     <Typography variant="h6" color="textSecondary" component="p">
     Rank: {rank}
     </Typography>
   </CardContent>
 </CardActionArea>
 <CardActions>
  <Button size="small" color="primary" onClick={onClick} >
   Save
   </Button>
   </CardActions>
   </Card>
   </div>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {
  saveArticle,
})(ArticleCard);

