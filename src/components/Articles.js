import { useContext } from "react";
import { UserContext } from "../contexts/User";

import { useEffect, useState } from "react";

import { fetchArticles, deleteArticle } from "../utils/Api";

import { PostArticle } from "../components/PostArticle";
import { ArticleCard } from "../components/ArticleCard";

import loadingSVG from "../svg/loading.svg";

export function Articles(props) {
  const { user } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const { query } = props;

  useEffect(() => {
    fetchArticles(query).then((res) => {
      setArticles(res);
    });
  }, [query]);

  const deleteArticleByID = (article_id, index) => {
    deleteArticle(article_id);

    setArticles((current) => {
      const newArray = [...current];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  if (articles.length === 0)
    return <img src={loadingSVG} alt="loading" className="loadingSVG" />;

  return (
    <div className="Articles">
      {user.username ? <PostArticle setArticles={setArticles} /> : <></>}

      <ul className="article-list">
        <h2>{articles.length || 0} Articles</h2>
        {articles.map((article, index) => {
          return (
            <ArticleCard
              article={article}
              key={article.article_id}
              index={index}
              deleteArticleByID={deleteArticleByID}
            />
          );
        })}
      </ul>
    </div>
  );
}
