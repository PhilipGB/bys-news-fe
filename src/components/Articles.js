import { useEffect, useState } from "react";

import { fetchArticles } from "../utils/Api";

import { ArticleCard } from "../components/ArticleCard";

export function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((res) => {
      setArticles(res);
    });
  }, []);

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
