import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function IndividualArticle() {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pintereach-backend-ajg.herokuapp.com/articles/${id}`)
      .then((res) => {
        setArticle(res.data[0]);
      })
      .catch((err) =>
        console.log("ERROR: Individual article get:", err.response)
      );
  }, []);
  console.log(article);

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <h3>Author: {article.author}</h3>
      <img className="image" src={article.image}></img>
      <div className="summary">
        <p>Summary: {article.summary}</p>
      </div>
      <div className="category">
        <p>Category: {article.category}</p>
      </div>
    </div>
  );
}

