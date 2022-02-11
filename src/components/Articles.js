import { useEffect, useState } from "react";

import { fetchArticles } from "../utils/Api";

import { PostArticle } from "../components/PostArticle";
import { ArticleCard } from "../components/ArticleCard";

import loadingSVG from "../svg/loading.svg";

export function Articles(props) {
  const [articles, setArticles] = useState([]);
  const { query, user } = props;

  useEffect(() => {
    fetchArticles(query).then((res) => {
      setArticles(res);
    });
  }, [query]);

  if (articles.length === 0)
    return <img src={loadingSVG} alt="loading" className="loadingSVG" />;

  return (
    <div className="Articles">
      {user ? <PostArticle setArticles={setArticles} /> : <></>}
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
}
