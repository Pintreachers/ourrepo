import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList(props) {
  const { articles, } = props;

  return (
    <div className="articlecards">
      {articles
        ? articles.map((article) => (
            <div>
              <ArticleCard
                article={article}
              />
            </div>
          ))
        : "loading.."}
    </div>
  );
}
export default ArticleList;
