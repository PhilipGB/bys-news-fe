import { useEffect, useState } from "react";

import { fetchArticles } from "../utils/Api";

import { ArticleCard } from "../components/ArticleCard";

import loadingSVG from "../svg/loading.svg";

export function Articles(props) {
  const [articles, setArticles] = useState([]);
  const { query } = props;

  useEffect(() => {
    fetchArticles(query).then((res) => {
      setArticles(res);
    });
  }, [query]);

  if (articles.length === 0)
    return <img src={loadingSVG} alt="loading" className="loadingSVG" />;

  return (
    <div className="Articles">
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
